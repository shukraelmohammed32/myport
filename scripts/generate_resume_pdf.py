from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.lib import colors


@dataclass(frozen=True)
class ResumeSkillGroup:
    group: str
    items: list[str]


@dataclass(frozen=True)
class ResumeExperience:
    title: str
    bullets: list[str]


@dataclass(frozen=True)
class ResumeEducation:
    degree: str
    school: str
    location: str
    note: str


@dataclass(frozen=True)
class ResumeProject:
    title: str
    summary: str
    stack: list[str]


@dataclass(frozen=True)
class ResumeLanguage:
    name: str
    level: str


@dataclass(frozen=True)
class ResumeData:
    name: str
    headline: str
    location: str
    email: str
    github: str
    linkedin: str
    summary: list[str]
    education: list[ResumeEducation]
    skills: list[ResumeSkillGroup]
    experience: list[ResumeExperience]
    projects: list[ResumeProject]
    achievements: list[str]
    languages: list[ResumeLanguage]
    interests: list[str]
    references: str


def _wrap_lines(text: str, *, font_name: str, font_size: float, max_width: float) -> list[str]:
    words = text.split()
    if not words:
        return []

    lines: list[str] = []
    current: list[str] = []

    for word in words:
        trial = " ".join([*current, word])
        if not current or stringWidth(trial, font_name, font_size) <= max_width:
            current.append(word)
            continue

        lines.append(" ".join(current))
        current = [word]

    if current:
        lines.append(" ".join(current))

    return lines


def _draw_rule(c: canvas.Canvas, *, x: float, y: float, width: float, color: colors.Color, thickness: float = 1.2) -> None:
    c.setStrokeColor(color)
    c.setLineWidth(thickness)
    c.line(x, y, x + width, y)


def _draw_section_heading(
    c: canvas.Canvas,
    *,
    x: float,
    y: float,
    label: str,
    width: float,
    accent: colors.Color,
    text_color: colors.Color,
) -> float:
    c.setFont("Helvetica-Bold", 10.5)
    c.setFillColor(accent)
    c.drawString(x, y, label.upper())

    rule_y = y - 4
    c.setFillColor(text_color)
    _draw_rule(c, x=x, y=rule_y, width=width, color=accent, thickness=1.0)
    return rule_y - 12


def _draw_paragraph(
    c: canvas.Canvas,
    *,
    x: float,
    y: float,
    text: str,
    width: float,
    font_name: str = "Helvetica",
    font_size: float = 9.6,
    leading: float = 13.0,
    color: colors.Color = colors.black,
) -> float:
    c.setFont(font_name, font_size)
    c.setFillColor(color)

    for line in _wrap_lines(text, font_name=font_name, font_size=font_size, max_width=width):
        c.drawString(x, y, line)
        y -= leading

    return y


def _draw_bullets(
    c: canvas.Canvas,
    *,
    x: float,
    y: float,
    bullets: list[str],
    width: float,
    bullet_indent: float = 10,
    font_name: str = "Helvetica",
    font_size: float = 9.6,
    leading: float = 13.0,
    color: colors.Color = colors.black,
) -> float:
    c.setFont(font_name, font_size)
    c.setFillColor(color)

    for bullet in bullets:
        lines = _wrap_lines(bullet, font_name=font_name, font_size=font_size, max_width=width - bullet_indent)
        if not lines:
            continue

        c.drawString(x, y, "•")
        c.drawString(x + bullet_indent, y, lines[0])
        y -= leading

        for cont in lines[1:]:
            c.drawString(x + bullet_indent, y, cont)
            y -= leading

        y -= 2

    return y


def _load_resume(path: Path) -> ResumeData:
    raw = json.loads(path.read_text(encoding="utf-8"))

    def req_str(obj: dict[str, Any], key: str) -> str:
        value = obj.get(key)
        if not isinstance(value, str) or not value.strip():
            raise ValueError(f"Missing/invalid '{key}' in {path}")
        return value.strip()

    links = raw.get("links")
    if not isinstance(links, dict):
        raise ValueError("Missing 'links' object")

    summary = raw.get("summary")
    if not isinstance(summary, list) or not all(isinstance(item, str) for item in summary):
        raise ValueError("Missing/invalid 'summary' (array of strings)")

    education_raw = raw.get("education")
    if not isinstance(education_raw, list):
        raise ValueError("Missing/invalid 'education'")

    education: list[ResumeEducation] = []
    for item in education_raw:
        if not isinstance(item, dict):
            continue
        education.append(
            ResumeEducation(
                degree=req_str(item, "degree"),
                school=req_str(item, "school"),
                location=req_str(item, "location"),
                note=req_str(item, "note"),
            )
        )

    skills_raw = raw.get("skills")
    if not isinstance(skills_raw, list):
        raise ValueError("Missing/invalid 'skills'")

    skills: list[ResumeSkillGroup] = []
    for item in skills_raw:
        if not isinstance(item, dict):
            continue
        group = req_str(item, "group")
        items = item.get("items")
        if not isinstance(items, list) or not all(isinstance(x, str) for x in items):
            raise ValueError(f"Invalid skills.items for group '{group}'")
        skills.append(ResumeSkillGroup(group=group, items=[x.strip() for x in items if x.strip()]))

    experience_raw = raw.get("experience")
    if not isinstance(experience_raw, list):
        raise ValueError("Missing/invalid 'experience'")

    experience: list[ResumeExperience] = []
    for item in experience_raw:
        if not isinstance(item, dict):
            continue
        title = req_str(item, "title")
        bullets = item.get("bullets")
        if not isinstance(bullets, list) or not all(isinstance(x, str) for x in bullets):
            raise ValueError(f"Invalid experience.bullets for '{title}'")
        experience.append(ResumeExperience(title=title, bullets=[x.strip() for x in bullets if x.strip()]))

    projects_raw = raw.get("projects")
    if not isinstance(projects_raw, list):
        raise ValueError("Missing/invalid 'projects'")

    projects: list[ResumeProject] = []
    for item in projects_raw:
        if not isinstance(item, dict):
            continue
        projects.append(
            ResumeProject(
                title=req_str(item, "title"),
                summary=req_str(item, "summary"),
                stack=[x.strip() for x in item.get("stack", []) if isinstance(x, str) and x.strip()],
            )
        )

    achievements_raw = raw.get("achievements")
    if not isinstance(achievements_raw, list) or not all(isinstance(x, str) for x in achievements_raw):
        raise ValueError("Missing/invalid 'achievements'")

    languages_raw = raw.get("languages")
    if not isinstance(languages_raw, list):
        raise ValueError("Missing/invalid 'languages'")

    languages: list[ResumeLanguage] = []
    for item in languages_raw:
        if not isinstance(item, dict):
            continue
        languages.append(ResumeLanguage(name=req_str(item, "name"), level=req_str(item, "level")))

    interests_raw = raw.get("interests")
    if not isinstance(interests_raw, list) or not all(isinstance(x, str) for x in interests_raw):
        raise ValueError("Missing/invalid 'interests'")

    return ResumeData(
        name=req_str(raw, "name"),
        headline=req_str(raw, "headline"),
        location=req_str(raw, "location"),
        email=req_str(raw, "email"),
        github=req_str(links, "github"),
        linkedin=req_str(links, "linkedin"),
        summary=[x.strip() for x in summary if x.strip()],
        education=education,
        skills=skills,
        experience=experience,
        projects=projects,
        achievements=[x.strip() for x in achievements_raw if x.strip()],
        languages=languages,
        interests=[x.strip() for x in interests_raw if x.strip()],
        references=req_str(raw, "references"),
    )


def _shorten_url(url: str) -> str:
    url = url.strip()
    for prefix in ("https://", "http://"):
        if url.startswith(prefix):
            url = url[len(prefix) :]
    return url.rstrip("/")


def build_pdf(resume: ResumeData, output_path: Path, *, profile_image_path: Path | None = None) -> None:
    page_w, page_h = A4

    # Theme colors (matched to styles/globals.css)
    bg_dark = colors.HexColor("#0a0a0a")
    ink_light = colors.HexColor("#ffffff")
    muted_light = colors.HexColor("#aaaaaa")
    accent = colors.HexColor("#ff1a1a")
    accent_secondary = colors.HexColor("#b30000")

    text_dark = colors.HexColor("#111111")
    text_muted = colors.HexColor("#444444")

    sidebar_w = 62 * mm
    gutter = 10 * mm
    margin_right = 14 * mm
    margin_top = 14 * mm
    margin_bottom = 14 * mm

    sidebar_x = 0
    main_x = sidebar_w + gutter
    main_w = page_w - main_x - margin_right

    sidebar_pad_x = 8 * mm
    sidebar_text_w = sidebar_w - 2 * sidebar_pad_x

    c = canvas.Canvas(str(output_path), pagesize=A4)

    # Backgrounds
    c.setFillColor(colors.white)
    c.rect(0, 0, page_w, page_h, stroke=0, fill=1)

    c.setFillColor(bg_dark)
    c.rect(sidebar_x, 0, sidebar_w, page_h, stroke=0, fill=1)

    # Accent rail
    c.setFillColor(accent)
    c.rect(sidebar_w - 2, 0, 2, page_h, stroke=0, fill=1)

    # Header (main)
    y = page_h - margin_top - 6
    c.setFillColor(text_dark)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(main_x, y, resume.name)

    y -= 20
    c.setFillColor(accent_secondary)
    c.setFont("Helvetica-Bold", 11.5)
    c.drawString(main_x, y, resume.headline)

    y -= 10
    _draw_rule(c, x=main_x, y=y, width=min(main_w, 290), color=accent, thickness=1.4)

    # Sidebar top: avatar + contact
    ys = page_h - margin_top - 6

    if profile_image_path and profile_image_path.exists():
        avatar_r = 18 * mm
        avatar_cx = sidebar_w / 2
        avatar_cy = page_h - margin_top - avatar_r

        # Soft glow (if alpha is supported by the backend)
        try:
            c.saveState()
            c.setFillAlpha(0.25)
            c.setFillColor(accent)
            c.circle(avatar_cx, avatar_cy, avatar_r * 1.35, stroke=0, fill=1)
            c.restoreState()
        except Exception:
            pass

        # Accent ring
        c.setStrokeColor(accent)
        c.setLineWidth(1.6)
        c.circle(avatar_cx, avatar_cy, avatar_r + 2.4, stroke=1, fill=0)

        # Circular clipped image
        img = ImageReader(str(profile_image_path))
        c.saveState()
        clip = c.beginPath()
        clip.circle(avatar_cx, avatar_cy, avatar_r)
        c.clipPath(clip, stroke=0, fill=0)
        c.drawImage(
            img,
            avatar_cx - avatar_r,
            avatar_cy - avatar_r,
            width=avatar_r * 2,
            height=avatar_r * 2,
            mask="auto",
        )
        c.restoreState()

        ys = avatar_cy - avatar_r - (10 * mm)
    c.setFillColor(ink_light)
    c.setFont("Helvetica-Bold", 12.5)
    c.drawString(sidebar_pad_x, ys, "CONTACT")
    ys -= 14

    c.setFillColor(muted_light)
    c.setFont("Helvetica", 9.4)

    contact_lines = [
        f"{resume.location}",
        f"{resume.email}",
        _shorten_url(resume.github),
        _shorten_url(resume.linkedin),
    ]
    for line in contact_lines:
        for wrapped in _wrap_lines(line, font_name="Helvetica", font_size=9.4, max_width=sidebar_text_w):
            c.drawString(sidebar_pad_x, ys, wrapped)
            ys -= 12
        ys -= 2

    # Sidebar: skills
    ys -= 8
    c.setFillColor(ink_light)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(sidebar_pad_x, ys, "SKILLS")
    ys -= 14

    for group in resume.skills:
        c.setFillColor(accent)
        c.setFont("Helvetica-Bold", 9.4)
        c.drawString(sidebar_pad_x, ys, group.group.upper())
        ys -= 11

        c.setFillColor(muted_light)
        c.setFont("Helvetica", 9.2)
        joined = " • ".join(group.items)
        for wrapped in _wrap_lines(joined, font_name="Helvetica", font_size=9.2, max_width=sidebar_text_w):
            c.drawString(sidebar_pad_x, ys, wrapped)
            ys -= 11
        ys -= 6

    # Sidebar: languages
    c.setFillColor(ink_light)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(sidebar_pad_x, ys, "LANGUAGES")
    ys -= 14

    c.setFillColor(muted_light)
    c.setFont("Helvetica", 9.2)
    for lang in resume.languages:
        line = f"{lang.name} — {lang.level}"
        for wrapped in _wrap_lines(line, font_name="Helvetica", font_size=9.2, max_width=sidebar_text_w):
            c.drawString(sidebar_pad_x, ys, wrapped)
            ys -= 11
        ys -= 2

    # Sidebar: interests
    ys -= 8
    c.setFillColor(ink_light)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(sidebar_pad_x, ys, "INTERESTS")
    ys -= 14

    c.setFillColor(muted_light)
    c.setFont("Helvetica", 9.2)
    for interest in resume.interests:
        for wrapped in _wrap_lines(interest, font_name="Helvetica", font_size=9.2, max_width=sidebar_text_w):
            c.drawString(sidebar_pad_x, ys, wrapped)
            ys -= 11
        ys -= 2

    # Main content
    y_main = y - 22
    y_main = _draw_section_heading(
        c,
        x=main_x,
        y=y_main,
        label="Profile",
        width=main_w,
        accent=accent,
        text_color=text_dark,
    )

    profile_text = " ".join(resume.summary)
    y_main = _draw_paragraph(
        c,
        x=main_x,
        y=y_main,
        text=profile_text,
        width=main_w,
        font_name="Helvetica",
        font_size=9.8,
        leading=13.2,
        color=text_muted,
    )

    y_main -= 8
    y_main = _draw_section_heading(
        c,
        x=main_x,
        y=y_main,
        label="Experience",
        width=main_w,
        accent=accent,
        text_color=text_dark,
    )

    for exp in resume.experience:
        c.setFillColor(text_dark)
        c.setFont("Helvetica-Bold", 10.2)
        c.drawString(main_x, y_main, exp.title)
        y_main -= 14
        y_main = _draw_bullets(
            c,
            x=main_x,
            y=y_main,
            bullets=exp.bullets,
            width=main_w,
            bullet_indent=10,
            font_name="Helvetica",
            font_size=9.6,
            leading=13.0,
            color=text_muted,
        )
        y_main -= 2

    y_main -= 6
    y_main = _draw_section_heading(
        c,
        x=main_x,
        y=y_main,
        label="Projects",
        width=main_w,
        accent=accent,
        text_color=text_dark,
    )

    # Keep projects compact to stay on one page.
    for project in resume.projects[:3]:
        c.setFillColor(text_dark)
        c.setFont("Helvetica-Bold", 10.2)
        c.drawString(main_x, y_main, project.title)
        y_main -= 13

        y_main = _draw_paragraph(
            c,
            x=main_x,
            y=y_main,
            text=project.summary,
            width=main_w,
            font_name="Helvetica",
            font_size=9.4,
            leading=12.8,
            color=text_muted,
        )

        if project.stack:
            stack_line = " / ".join(project.stack[:6])
            c.setFillColor(accent_secondary)
            c.setFont("Helvetica-Bold", 8.6)
            for wrapped in _wrap_lines(stack_line, font_name="Helvetica-Bold", font_size=8.6, max_width=main_w):
                c.drawString(main_x, y_main, wrapped)
                y_main -= 11

        y_main -= 6

    y_main -= 2
    y_main = _draw_section_heading(
        c,
        x=main_x,
        y=y_main,
        label="Education",
        width=main_w,
        accent=accent,
        text_color=text_dark,
    )

    for edu in resume.education:
        c.setFillColor(text_dark)
        c.setFont("Helvetica-Bold", 10.2)
        c.drawString(main_x, y_main, edu.degree)
        y_main -= 13

        c.setFillColor(text_muted)
        c.setFont("Helvetica", 9.4)
        c.drawString(main_x, y_main, f"{edu.school} • {edu.location}")
        y_main -= 12

        c.setFillColor(text_muted)
        c.setFont("Helvetica", 9.2)
        c.drawString(main_x, y_main, edu.note)
        y_main -= 14

    y_main -= 2
    y_main = _draw_section_heading(
        c,
        x=main_x,
        y=y_main,
        label="Highlights",
        width=main_w,
        accent=accent,
        text_color=text_dark,
    )
    y_main = _draw_bullets(
        c,
        x=main_x,
        y=y_main,
        bullets=resume.achievements,
        width=main_w,
        bullet_indent=10,
        font_name="Helvetica",
        font_size=9.6,
        leading=13.0,
        color=text_muted,
    )

    # Footer
    c.setFillColor(colors.HexColor("#888888"))
    c.setFont("Helvetica", 8.6)
    footer = f"{resume.email}  •  {_shorten_url(resume.github)}"
    c.drawRightString(page_w - margin_right, margin_bottom - 2, footer)

    c.showPage()
    c.save()


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    resume_path = root / "data" / "resume.json"
    output_path = root / "public" / "Shukrael_Resume.pdf"
    profile_image_path = root / "public" / "images" / "profile-picture.png"

    resume = _load_resume(resume_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(resume, output_path, profile_image_path=profile_image_path)

    print(f"Generated: {output_path}")


if __name__ == "__main__":
    main()
