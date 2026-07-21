from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "downloads" / "yu-yuying-resume.pdf"


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
    styles = getSampleStyleSheet()
    body = ParagraphStyle(
        "BodyCN",
        parent=styles["BodyText"],
        fontName="STSong-Light",
        fontSize=10.5,
        leading=16,
        textColor=colors.HexColor("#171717"),
        spaceAfter=7,
    )
    title = ParagraphStyle(
        "TitleCN",
        parent=body,
        fontSize=22,
        leading=28,
        spaceAfter=4,
    )
    sub = ParagraphStyle(
        "SubCN",
        parent=body,
        fontSize=11,
        textColor=colors.HexColor("#5f5a51"),
        spaceAfter=12,
    )
    section = ParagraphStyle(
        "SectionCN",
        parent=body,
        fontSize=13,
        leading=18,
        textColor=colors.HexColor("#00899b"),
        spaceBefore=8,
        spaceAfter=6,
    )

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        title="余宇颖公开简历",
    )

    story = [
        Paragraph("余宇颖 / YU YUYING", title),
        Paragraph("公开版简历 | 联系邮箱：uuwayne@qq.com | Guangzhou, China", sub),
        Paragraph(
            "我关注真实的人、社群与材料如何组织，并把复杂信息转化成文字、内容、视觉或互动体验。",
            body,
        ),
        Paragraph("Selected Work", section),
    ]

    rows = [
        [
            Paragraph("柯子岭客家村口述史", body),
            Paragraph("14 位受访者、1500+ 分钟录音、28 万字访谈实录，参与 12 万字成果写作。", body),
        ],
        [
            Paragraph("小红书游戏内容创作", body),
            Paragraph("独立完成选题、文案、剪辑与发布，单条视频 2 万赞、17 万+ 播放。", body),
        ],
        [
            Paragraph("南越王博物院观众研究", body),
            Paragraph("追踪 30+ 位观众行为轨迹，访谈 22 位观众，输出需求分析与产品建议。", body),
        ],
        [
            Paragraph("南京大学历史学术竞赛论文", body),
            Paragraph("以《广东新语》为中心研究岭南情感共同体，用 AI 辅助史料扫描，人工完成细读与校验。", body),
        ],
        [
            Paragraph("Chronicle / 佣书", body),
            Paragraph("AI、历史材料与互动叙事结合的游戏原型案例；源码保留在独立仓库。", body),
        ],
    ]

    table = Table(rows, colWidths=[46 * mm, 112 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 1.4, colors.HexColor("#171717")),
                ("INNERGRID", (0, 0), (-1, -1), 0.8, colors.HexColor("#171717")),
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#f6ff3f")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(table)
    story.extend(
        [
            Spacer(1, 8),
            Paragraph("Core Methods", section),
            Paragraph("深度访谈、行为观察、文献整理、内容策划、视频剪辑、AI 辅助研究与原型思考。", body),
            Paragraph("Privacy Note", section),
            Paragraph("此公开版本不包含手机号、出生年月、年龄、详细地址或 MBTI。", body),
        ]
    )

    doc.build(story)


if __name__ == "__main__":
    main()
