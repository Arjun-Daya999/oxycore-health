import sys

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # Ticker items
    (
        '<div className="ticker-item"><div className="ticker-sep"></div>OxyHealth Fortius 420</div>',
        '<div className="ticker-item"><div className="ticker-sep"></div>Premium HBOT Chambers</div>'
    ),
    (
        '<div className="ticker-item"><div className="ticker-sep"></div>100% Oxygen Delivery</div>',
        '<div className="ticker-item"><div className="ticker-sep"></div>Up to 95% Oxygen Delivery</div>'
    ),
    (
        '<div className="ticker-item"><div className="ticker-sep"></div>Red Light Therapy</div>',
        '<div className="ticker-item"><div className="ticker-sep"></div>Accelerated Recovery</div>'
    ),
    (
        '<div className="ticker-item"><div className="ticker-sep"></div>3.0 ATA Max Pressure</div>',
        '<div className="ticker-item"><div className="ticker-sep"></div>Total-Body Renewal</div>'
    ),

    # Chamber Art
    (
        '<div className="ca-label">Fortius 420 · OxyHealth</div>',
        '<div className="ca-label">Premium Chamber</div>'
    ),
    (
        '<div className="ca-stat-num">3.0</div>\n                  <div className="ca-stat-label">ATA</div>',
        '<div className="ca-stat-num">Opt.</div>\n                  <div className="ca-stat-label">Pressure</div>'
    ),
    (
        '<div className="ca-stat-num">100%</div>',
        '<div className="ca-stat-num">95%</div>'
    ),

    # About Text
    (
        'Equipped with the OxyHealth Fortius 420 — the gold standard in clinical hyperbaric chambers — and guided by caring, expert staff, we deliver cutting-edge oxygen therapy and red light treatments in a sanctuary of calm, precision, and personalized care.',
        'Equipped with premium hard-shell hyperbaric chambers and guided by caring, expert staff, we deliver cutting-edge oxygen therapy in a sanctuary of calm, precision, and personalized care.'
    ),

    # Benefits Header
    (
        'Breathing 100% pure oxygen under elevated pressure',
        'Breathing concentrated oxygen under elevated pressure'
    ),

    # Stats Band
    (
        '<div className="stat-val">3.0<em>×</em></div>\n          <div className="stat-unit">Atmospheric Pressure</div>\n          <div className="stat-desc">Maximum ATA of the Fortius 420</div>',
        '<div className="stat-val">Opt.<em>+</em></div>\n          <div className="stat-unit">Therapeutic Pressure</div>\n          <div className="stat-desc">Elevated atmospheric healing</div>'
    ),
    (
        '<div className="stat-val">100<em>%</em></div>\n          <div className="stat-unit">Pure Oxygen</div>',
        '<div className="stat-val">95<em>%</em></div>\n          <div className="stat-unit">Concentrated Oxygen</div>'
    ),

    # Services Intro
    (
        'From our flagship hyperbaric oxygen therapy to complementary red light treatments',
        'From our flagship hyperbaric oxygen therapy to specialized wellness protocols'
    ),

    # Primary Service
    (
        'Our signature treatment uses the OxyHealth Fortius 420 — a hospital-trusted, medical-grade chamber delivering 100% pure oxygen at up to 3.0 ATA.',
        'Our signature treatments utilize premium hard-shell chambers delivering highly concentrated oxygen at elevated therapeutic pressures.'
    ),
    (
        '<div className="spec-cell-val">3.0 ATA</div>\n              <div className="spec-cell-key">Max Pressure</div>',
        '<div className="spec-cell-val">Optimal</div>\n              <div className="spec-cell-key">Therapeutic Pressure</div>'
    ),
    (
        '<div className="spec-cell-val">100%</div>\n              <div className="spec-cell-key">Oxygen Purity</div>',
        '<div className="spec-cell-val">Up to 95%</div>\n              <div className="spec-cell-key">Oxygen Concentration</div>'
    ),
    (
        '<div className="cv-badge">Fortius 420 EXP</div>',
        '<div className="cv-badge">Premium Hard Shell</div>'
    ),

    # Secondary Services Grid
    (
        '<h3>Red Light Therapy</h3>\n          <p>Low-level wavelength therapy via LS Pro pads that promotes tissue repair, reduces joint pain, revitalizes skin health, and supports mitochondrial function at the cellular level.</p>',
        '<h3>Athletic Recovery</h3>\n          <p>Specialized hyperbaric protocols designed specifically to cut down recovery windows, flush out lactic acid, and restore peak output for athletes.</p>'
    ),
    
    # Why Choose Us
    (
        'The OxyHealth Fortius 420 is trusted by hospitals and elite sports organizations worldwide.',
        'We utilize top-tier, hard-shell hyperbaric chambers designed for comfort, safety, and profound clinical outcomes.'
    ),

    # Footer
    (
        '<li><a href="#services">Red Light Therapy</a></li>',
        '<li><a href="#services">Total-Body Renewal</a></li>'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

