// ==========================================
// COMPUTER GRAPHICS HUB - APPLICATION LOGIC
// ==========================================

// Global Countdown Timer Setup (Exam in 2 Days)
function initCountdown() {
  const countdownVal = document.querySelector('.countdown-val');
  
  // Set target date: 2 days from now (overmorrow) at 9:00 AM
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 9, 0, 0);
  
  function updateTimer() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;
    
    if (diff <= 0) {
      countdownVal.textContent = "Exam Time!";
      countdownVal.style.color = "var(--danger-color)";
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const dStr = days > 0 ? `${days}d ` : '';
    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');
    
    countdownVal.textContent = `${dStr}${hStr}:${mStr}:${sStr}`;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================
// TABS CONTROLLER
// ==========================================
function initTabs() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Remove active from all
      navButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active to current
      btn.classList.add('active');
      document.getElementById(`${tabId}-section`).classList.add('active');
      
      // Trigger specific initialization if needed
      if (tabId === 'visualizers') {
        window.dispatchEvent(new Event('resize')); // Recalculate grid sizing if hidden initially
      }
    });
  });
}

// ==========================================
// PRESENTATION SLIDES DATA & RENDERING
// ==========================================
const slidesDataCG = [
  {
    title: "Course Overview & Syllabus Map",
    unit: "Intro",
    content: `
      <h2>Computer Graphics Exam Prep <span class="slide-unit-badge">Overview</span></h2>
      <p>Welcome! This hub is systematically organized to help you master the key syllabus topics for your upcoming computer graphics exam overmorrow.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Unit-I: Graphics Systems & Hardware</h4>
          <ul class="slide-bullet-list">
            <li><strong>Basic Concepts:</strong> Frame buffer, Pixels, Aspect Ratio, Resolution, Refresh.</li>
            <li><strong>Applications:</strong> CAD, Computer Art, Presentation, Entertainment.</li>
            <li><strong>Display Architectures:</strong> Raster Scan vs. Random Scan.</li>
            <li><strong>Cathode Ray Tube (CRT):</strong> Component breakdown and beam deflection.</li>
            <li><strong>I/O Devices:</strong> Flat panels, spaceballs, trackballs, light pens.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color: var(--accent-purple);">Unit-II: Algorithms & Primitives</h4>
          <ul class="slide-bullet-list">
            <li><strong>Line Algorithms:</strong> DDA & Bresenham (Mathematical derivations).</li>
            <li><strong>Curve Algorithms:</strong> Midpoint Circle & Midpoint Ellipse.</li>
            <li><strong>Thick Primitives:</strong> Replication, double-pixel plotting, brush shapes.</li>
            <li><strong>Area Filling:</strong> Inside-Outside tests, Boundary-fill, Flood-fill, and Scan-Line Edge tables.</li>
          </ul>
        </div>
      </div>
      
      <p>💡 <em>Tip: Use the sidebar on the left to jump to any slide, or use the <strong>Left/Right arrow keys</strong> to navigate the deck. Move to the next tab to test yourself with Flashcards or watch the math run step-by-step in the Visualizers!</em></p>
    `
  },
  {
    title: "Introduction to Graphics Systems",
    unit: "Unit-I",
    content: `
      <h2>Introduction & Basic Elements <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Computer Graphics involves the creation, storage, and manipulation of models and images using computers.</p>
      
      <div class="info-callout">
        <h4>Core Concepts to Remember for the Exam:</h4>
        <ul class="slide-bullet-list">
          <li><strong>Pixel (Picture Element):</strong> The smallest addressable element or point on a screen.</li>
          <li><strong>Resolution:</strong> The maximum number of points that can be displayed without overlap (expressed as Width &times; Height, e.g., 1024 &times; 768). High resolution implies smaller, denser pixels.</li>
          <li><strong>Aspect Ratio:</strong> The ratio of the screen's width to its height (e.g., 4:3 or 16:9). Mathematically, it is the ratio of vertical points to horizontal points needed to plot equal-length lines.</li>
          <li><strong>Frame Buffer:</strong> A dedicated area of memory that stores the color intensity values of all pixels on the screen. Also known as the refresh buffer.</li>
          <li><strong>Depth (Bit Depth):</strong> The number of bits per pixel in the frame buffer. If depth is <em>n</em> bits, the screen can display 2<sup><em>n</em></sup> colors simultaneously. (1 bit = Monochrome, 8 bits = 256 colors, 24 bits = True Color).</li>
        </ul>
      </div>
      
      <div class="math-box">
        <p><strong>Frame Buffer Size Calculation:</strong></p>
        For a resolution of 1024 &times; 768 pixels with 24-bit color depth:
        <span class="code-line">Size = 1024 &times; 768 &times; 24 bits = 18,874,368 bits</span>
        <span class="code-line">Size = 18.87 Mbits = 2.36 Megabytes (MB)</span>
      </div>
    `
  },
  {
    title: "Applications of Computer Graphics",
    unit: "Unit-I",
    content: `
      <h2>Applications of Computer Graphics <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Computer Graphics is utilized across a vast range of fields. In the exam, you may be asked to list and explain 4-5 major applications.</p>
      
      <div class="slide-grid-2">
        <div>
          <ul class="slide-bullet-list" style="margin-left:0;">
            <li><strong>1. Computer-Aided Design (CAD):</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Used in engineering, architecture, and manufacturing to design buildings, automobiles, and circuits. Allows interactively testing stress, aerodynamics, and spatial fit before building prototypes.</p>
            </li>
            <li><strong>2. Presentation Graphics:</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Used to summarize financial, statistical, or scientific data into visual charts (bar charts, pie graphs, scatter plots) for reports and business presentations.</p>
            </li>
            <li><strong>3. Computer Art and Animation:</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Fine art, digital painting, logo design, CGI for advertisements, and special effects in movies.</p>
            </li>
          </ul>
        </div>
        <div>
          <ul class="slide-bullet-list" style="margin-left:0;">
            <li><strong>4. Entertainment and Games:</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Interactive 3D graphics rendering, virtual environments, and motion simulation for video games and films.</p>
            </li>
            <li><strong>5. Education & Training:</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Simulators for pilot training, medical visualization for surgery simulation, and graphical educational models.</p>
            </li>
            <li><strong>6. Scientific Visualization:</strong>
              <p style="font-size:0.88rem; margin-bottom: 0.5rem;">Rendering complex physical phenomena (weather patterns, fluid dynamics, molecular structures) to help researchers identify trends.</p>
            </li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Cathode Ray Tube (CRT) Architecture",
    unit: "Unit-I",
    content: `
      <h2>Cathode Ray Tube (CRT) Architecture <span class="slide-unit-badge">Unit-I</span></h2>
      <p>A CRT operates by emitting a highly focused beam of electrons from an electron gun, accelerating it, and deflecting it onto a phosphor-coated screen which glows to display images.</p>
      
      <div class="slide-grid-2-large-diagram">
        <div>
          <h4>Core Components of a CRT:</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.85rem; gap: 0.4rem;">
            <li><strong>Heater (Filament):</strong> Heats the cathode when electrical current passes through it.</li>
            <li><strong>Cathode:</strong> Emits electrons via thermionic emission when heated.</li>
            <li><strong>Control Grid:</strong> A metal cup that regulates the flow of electrons, controlling the beam's intensity (brightness).</li>
            <li><strong>Focusing Anode:</strong> Converges the spreading electrons into a sharp, thin beam.</li>
            <li><strong>Accelerating Anode:</strong> Applies positive voltage to speed up electrons towards the screen.</li>
            <li><strong>Deflection Yoke:</strong> Uses magnetic/electrostatic fields (horizontal & vertical plates) to bend the beam path to any screen location.</li>
            <li><strong>Phosphor Screen:</strong> Glows when struck. **Persistence** is the time it takes for emitted light to decay to 10% of its initial intensity.</li>
          </ul>
        </div>
        
        <div class="diagram-container" style="min-height: 250px;">
          <svg class="svg-diagram" viewBox="0 0 450 220" style="max-height: 220px;">
            <!-- CRT Envelope -->
            <path d="M 20 80 L 100 80 L 220 30 L 320 30 C 350 30 380 40 400 60 L 410 110 L 400 160 C 380 180 350 190 320 190 L 220 190 L 100 140 L 20 140 Z" fill="#131822" stroke="var(--color-text-secondary)" stroke-width="1.5"/>
            <path d="M 400 60 C 405 80 408 100 408 110 C 408 120 405 140 400 160" fill="none" stroke="#00f2fe" stroke-width="3" opacity="0.6"/> <!-- Phosphor Layer -->
            
            <!-- Heater Filament -->
            <line x1="30" y1="105" x2="40" y2="105" stroke="#ffb300" stroke-width="2"/>
            <line x1="30" y1="115" x2="40" y2="115" stroke="#ffb300" stroke-width="2"/>
            <path d="M 40 105 L 45 110 L 40 115" fill="none" stroke="#ffb300" stroke-width="2"/>
            
            <!-- Cathode -->
            <rect x="50" y="98" width="10" height="24" rx="2" fill="#718096" stroke="white" stroke-width="1"/>
            
            <!-- Control Grid -->
            <rect x="70" y="90" width="6" height="40" rx="1" fill="#4a5568" stroke="white" stroke-width="1"/>
            <line x1="73" y1="105" x2="73" y2="115" stroke="#0a0d14" stroke-width="3"/> <!-- Hole in Grid -->
            
            <!-- Focusing Anode -->
            <rect x="90" y="94" width="20" height="32" rx="1" fill="#4facfe" stroke="white" stroke-width="1"/>
            
            <!-- Accelerating Anode -->
            <rect x="125" y="94" width="20" height="32" rx="1" fill="#4facfe" stroke="white" stroke-width="1"/>
            
            <!-- Deflection Plates (Yoke) -->
            <path d="M 180 75 L 210 65" stroke="var(--accent-purple)" stroke-width="4" fill="none"/>
            <path d="M 180 135 L 210 145" stroke="var(--accent-purple)" stroke-width="4" fill="none"/>
            
            <!-- Electron Beam -->
            <path d="M 60 110 L 185 110" stroke="#00ff87" stroke-width="1.5" stroke-dasharray="2"/>
            <path d="M 185 110 L 404 80" stroke="#00ff87" stroke-width="2" id="beam-path"/>
            <circle cx="404" cy="80" r="4" fill="#00ff87" filter="drop-shadow(0 0 4px #00ff87)"/> <!-- Screen Spot -->
            
            <!-- Labels & Arrows -->
            <text x="35" y="152" class="svg-text" font-size="8px">Heater</text>
            <text x="55" y="85" class="svg-text" font-size="8px">Cathode</text>
            <text x="85" y="70" class="svg-text" font-size="8px">Control Grid</text>
            <text x="120" y="152" class="svg-text" font-size="8px">Anodes</text>
            <text x="210" y="170" class="svg-text" font-size="8px" fill="var(--accent-purple)">Deflection Plates</text>
            <text x="360" y="75" class="svg-text" font-size="8px" fill="#00ff87">Electron Beam</text>
            <text x="430" y="112" class="svg-text" font-size="8px" fill="#00f2fe">Phosphor</text>
            <text x="430" y="122" class="svg-text" font-size="8px" fill="#00f2fe">Screen</text>
            
            <!-- Line Indicators -->
            <line x1="35" y1="145" x2="40" y2="120" stroke="white" stroke-width="0.5" opacity="0.5"/>
            <line x1="55" y1="90" x2="55" y2="98" stroke="white" stroke-width="0.5" opacity="0.5"/>
            <line x1="120" y1="145" x2="110" y2="120" stroke="white" stroke-width="0.5" opacity="0.5"/>
          </svg>
          <div class="diagram-caption">CRT Component Breakdown: From electron emission to phosphor collision</div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem; border-left-color: var(--warning-color);">
        <h4>Fluorescence vs. Phosphorescence</h4>
        <p style="font-size:0.88rem; margin-bottom:0;">
          * **Fluorescence:** The immediate emission of light as the phosphor is struck by the electron beam.
          <br>* **Phosphorescence:** The continued emission of light *after* the electron beam is removed. This defines the screen's **persistence**. Short persistence phosphor requires high refresh rates.
        </p>
      </div>
    `
  },
  {
    title: "Raster Scan Display Architecture",
    unit: "Unit-I",
    content: `
      <h2>Raster Scan Displays <span class="slide-unit-badge">Unit-I</span></h2>
      <p><strong>Raster Scan Displays</strong> sweep an electron beam across the screen row-by-row from top to bottom. Each row is called a <em>scan line</em>.</p>
      
      <div class="slide-grid-2-large-diagram">
        <div>
          <h4>How it Works:</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.9rem;">
            <li>The electron beam sweeps horizontally across the screen, turning on/off to illuminate pixels based on color values in the <strong>Frame Buffer</strong>.</li>
            <li><strong>Horizontal Retrace:</strong> When the beam reaches the end of a scan line, it is turned off (blanked) and sweeps back to the left side of the next line.</li>
            <li><strong>Vertical Retrace:</strong> When the beam reaches the bottom right of the screen, it blanks and sweeps back to the top left corner to begin the next frame.</li>
            <li><strong>Refresh Rate:</strong> The screen is redrawn (refreshed) at a rate of 60 to 80 frames per second (Hz) to prevent flickering.</li>
            <li><strong>Interlacing:</strong> Raster beams scan all even lines first, then odd lines. This doubles the apparent refresh rate without requiring more memory speed.</li>
          </ul>
        </div>
        
        <div class="diagram-container">
          <svg class="svg-diagram" viewBox="0 0 240 200">
            <!-- Screen Border -->
            <rect x="10" y="10" width="220" height="150" rx="10" fill="#151b26" stroke="#00f2fe" stroke-width="2"/>
            
            <!-- Scan lines -->
            <line x1="20" y1="30" x2="210" y2="30" stroke="var(--color-text-muted)" stroke-dasharray="3" stroke-width="1"/>
            <line x1="20" y1="50" x2="210" y2="50" stroke="var(--color-text-muted)" stroke-dasharray="3" stroke-width="1"/>
            
            <!-- Horizontal Retrace -->
            <line x1="210" y1="30" x2="20" y2="50" stroke="var(--accent-purple)" stroke-dasharray="2" stroke-width="0.8" opacity="0.7"/>
            
            <!-- Active Beam Scanning -->
            <path d="M 20 70 L 150 70" stroke="#00ff87" stroke-width="2" marker-end="url(#arrow-green)"/>
            <path d="M 150 70 L 210 70" stroke="var(--color-text-muted)" stroke-dasharray="3" stroke-width="1"/>
            
            <!-- CRT Gun representation -->
            <circle cx="120" cy="180" r="12" fill="#202a3a" stroke="#4facfe" stroke-width="1.5"/>
            <text x="120" y="184" class="svg-text" font-size="8px">Gun</text>
            
            <!-- Electron beams -->
            <line x1="120" y1="168" x2="150" y2="70" stroke="rgba(0, 255, 135, 0.4)" stroke-width="1.5" stroke-dasharray="2"/>
            
            <!-- Legend / Text -->
            <text x="70" y="24" class="svg-text" font-size="8px">Scan line</text>
            <text x="120" y="44" class="svg-text" font-size="7px" fill="var(--accent-purple)">Horizontal Retrace</text>
            <text x="120" y="90" class="svg-text" font-size="8px" fill="#00ff87">Active Electron Beam</text>
            
            <!-- Markers -->
            <defs>
              <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#00ff87" />
              </marker>
            </defs>
          </svg>
          <div class="diagram-caption">Raster Scan Sweep & Retrace Pattern</div>
        </div>
      </div>
    `
  },
  {
    title: "Random Scan Display Architecture",
    unit: "Unit-I",
    content: `
      <h2>Random Scan Displays <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Also known as <strong>Vector, Stroke-Writing, or Calligraphic Displays</strong>, Random Scan Displays direct the electron beam only to the parts of the screen where a line is to be drawn.</p>
      
      <div class="slide-grid-2-large-diagram">
        <div>
          <h4>How it Works:</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.9rem;">
            <li>Unlike Raster Scan, which traverses the entire screen, a Random scan beam draws line segments directly, skipping blank spaces.</li>
            <li><strong>Display File/Buffer:</strong> Stores a list of line-drawing commands (e.g., <code>MOVE TO X,Y</code>, <code>LINE TO X,Y</code>). A display processor cycles through this buffer to redraw the screen (30-60 Hz).</li>
            <li><strong>Beam Path:</strong> Follows the vector paths defined in the file. No retrace is needed, just direct beam movement.</li>
            <li><strong>Aliasing:</strong> There is no pixelation or stair-stepping. Lines are perfectly smooth because the beam is swept continuously.</li>
          </ul>
        </div>
        
        <div class="diagram-container">
          <svg class="svg-diagram" viewBox="0 0 240 200">
            <!-- Screen Border -->
            <rect x="10" y="10" width="220" height="150" rx="10" fill="#151b26" stroke="#9b51e0" stroke-width="2"/>
            
            <!-- Direct line drawings -->
            <path d="M 40 40 L 180 60 L 140 130 L 40 40" stroke="#00f2fe" stroke-width="2" stroke-linejoin="round" fill="none"/>
            
            <!-- Gun and deflected beam -->
            <circle cx="120" cy="180" r="12" fill="#202a3a" stroke="#4facfe" stroke-width="1.5"/>
            <text x="120" y="184" class="svg-text" font-size="8px">Gun</text>
            
            <!-- Electron beams -->
            <line x1="120" y1="168" x2="140" y2="130" stroke="rgba(0, 242, 254, 0.4)" stroke-width="1.5" stroke-dasharray="2"/>
            
            <!-- Labels -->
            <text x="110" y="85" class="svg-text" font-size="9px" fill="#00f2fe">Directed Beam draws</text>
            <text x="110" y="98" class="svg-text" font-size="9px" fill="#00f2fe">vector lines directly</text>
          </svg>
          <div class="diagram-caption">Vector Scan: Beam draws continuous lines</div>
        </div>
      </div>
      
      <div class="diff-grid">
        <div class="diff-card raster">
          <h4>Raster Scan Displays</h4>
          <ul>
            <li>Draws line by plotting grid pixels (staircase aliasing).</li>
            <li>Refresh rate is independent of picture complexity.</li>
            <li>Ideal for realistic shaded images and photos.</li>
            <li>Low cost, high consumer availability.</li>
          </ul>
        </div>
        <div class="diff-card random">
          <h4>Random Scan Displays</h4>
          <ul>
            <li>Draws lines directly (perfectly smooth, no aliasing).</li>
            <li>Refresh rate decreases as complexity increases.</li>
            <li>Ideal for line drawings (wireframes, schematics).</li>
            <li>Higher cost, specialized scientific uses.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Graphics Hardware & I/O Devices",
    unit: "Unit-I",
    content: `
      <h2>Graphics Hardware & I/O Devices <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Graphics hardware consists of controllers/processors, display systems, and various interaction tools.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Common Output Systems</h4>
          <ul class="slide-bullet-list">
            <li><strong>Cathode Ray Tube (CRT):</strong> Uses an electron gun, focusing/deflection coils, and a phosphor screen. Heat and magnetic fields excite electrons to emit light.</li>
            <li><strong>Flat-Panel Displays:</strong>
              <br>• <em>LCD (Liquid Crystal Display):</em> Uses liquid crystals that rotate polarized light in response to an electric field. Requires a backlight.
              <br>• <em>LED (Light Emitting Diode):</em> LCD screen backlit with energy-efficient LEDs.
              <br>• <em>Plasma Panels:</em> Employs gas (neon-xenon) trapped between glass plates that emits UV light when charged, exciting phosphors.
            </li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color: var(--accent-purple);">Common Input Devices</h4>
          <ul class="slide-bullet-list">
            <li><strong>Keyboards & Mouse:</strong> Standard alphanumeric input and coordinate locator tools.</li>
            <li><strong>Trackball / Spaceball:</strong> 2D/3D rotational inputs; spaceballs measure tension (force) rather than rotation.</li>
            <li><strong>Joysticks:</strong> Employs potentiometers to send deflection coordinates to the graphic system.</li>
            <li><strong>Digitizers (Graphics Tablets):</strong> Uses electromagnetic signals under a grid to track stylus positions precisely.</li>
            <li><strong>Light Pens:</strong> Handheld photosensitive rod; detects the burst of light from the CRT beam sweeping beneath it to calculate screen coordinates.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "DDA Line Drawing Algorithm",
    unit: "Unit-II",
    content: `
      <h2>DDA Line Drawing Algorithm <span class="slide-unit-badge">Unit-II</span></h2>
      <p>The <strong>Digital Differential Analyzer (DDA)</strong> is a scan-conversion algorithm that computes line pixel coordinates step-by-step using floating-point addition.</p>
      
      <div class="math-box">
        <p><strong>DDA Mathematical Formulations:</strong></p>
        Given endpoints (x<sub>0</sub>, y<sub>0</sub>) and (x<sub>1</sub>, y<sub>1</sub>):
        <br>1. Calculate &Delta;x = x<sub>1</sub> - x<sub>0</sub> and &Delta;y = y<sub>1</sub> - y<sub>0</sub>.
        <br>2. Calculate Steps = max(|&Delta;x|, |&Delta;y|).
        <br>3. Determine increment values:
        <span class="code-line">  x_inc = &Delta;x / Steps</span>
        <span class="code-line">  y_inc = &Delta;y / Steps</span>
        4. For each step k = 0 to Steps:
        <span class="code-line">  x_{k+1} = x_k + x_inc</span>
        <span class="code-line">  y_{k+1} = y_k + y_inc</span>
        <span class="code-line">  Plot pixel at (round(x_k), round(y_k))</span>
      </div>
      
      <div class="info-callout">
        <h4>Key Exam Highlights:</h4>
        <ul class="slide-bullet-list">
          <li><strong>If Slope |m| &le; 1:</strong> Steps = |&Delta;x|. Thus x increments by 1, and y increments by <em>m</em>.</li>
          <li><strong>If Slope |m| > 1:</strong> Steps = |&Delta;y|. Thus y increments by 1, and x increments by 1/<em>m</em>.</li>
          <li><strong>Advantages:</strong> Simple and easy to understand; faster than direct line equations (y = mx + c) because it eliminates multiplication.</li>
          <li><strong>Disadvantages:</strong> Requires floating-point arithmetic (adds fractional components) and costly <code>round()</code> operations at each step, making it slow in low-level hardware.</li>
        </ul>
      </div>
    `
  },
  {
    title: "Bresenham's Line Drawing Algorithm",
    unit: "Unit-II",
    content: `
      <h2>Bresenham's Line Algorithm <span class="slide-unit-badge">Unit-II</span></h2>
      <p><strong>Bresenham's Algorithm</strong> optimizes line scan-conversion by using **only fast integer arithmetic** (no division, no floats, no rounding).</p>
      
      <div class="math-box">
        <p><strong>Bresenham Derivation (For Octant 1: 0 &le; m &le; 1):</strong></p>
        At step k, if we plot (x<sub>k</sub>, y<sub>k</sub>), the next pixel is either E (x<sub>k</sub>+1, y<sub>k</sub>) or NE (x<sub>k</sub>+1, y<sub>k</sub>+1).
        We calculate decision variable P<sub>k</sub> which represents the difference between the two choices:
        <span class="code-line">1. Initial decision parameter: P_0 = 2&Delta;y - &Delta;x</span>
        <span class="code-line">2. At each step k:</span>
        <span class="code-line">   If P_k < 0: next pixel is (x_k + 1, y_k)</span>
        <span class="code-line">              P_{k+1} = P_k + 2&Delta;y</span>
        <span class="code-line">   Else:      next pixel is (x_k + 1, y_k + 1)</span>
        <span class="code-line">              P_{k+1} = P_k + 2&Delta;y - 2&Delta;x</span>
      </div>

      <div class="info-callout">
        <h4>Why Bresenham is Preferred in Exams:</h4>
        <ul class="slide-bullet-list">
          <li><strong>Integer-Only:</strong> Relies on additions and shifts (2&Delta;y is equivalent to left shifting &Delta;y by 1). Fits perfectly in microcode display processors.</li>
          <li><strong>Accurate:</strong> Draws mathematically optimal line segments by tracking error accumulators.</li>
        </ul>
      </div>
      <p>💡 <em>Go to the "Visualizers" tab to run a line and compare how Bresenham's integer decision variable guides pixel selection versus DDA's floating values!</em></p>
    `
  },
  {
    title: "Midpoint Circle Drawing Algorithm",
    unit: "Unit-II",
    content: `
      <h2>Midpoint Circle Drawing <span class="slide-unit-badge">Unit-II</span></h2>
      <p>The Midpoint Circle drawing algorithm uses **8-way symmetry** to draw a circle by calculating coordinates for only one octant (0 to 45&deg;), and mirroring them.</p>
      
      <div class="slide-grid-2-large-diagram">
        <div>
          <h4>8-Way Symmetry Concept:</h4>
          If pixel <strong>(x, y)</strong> is calculated on a circle centered at (0,0), then these seven other points are plotted instantly:
          <div style="font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.9rem; color: var(--primary-color);">
            (y, x), (-y, x), (-x, y), (-x, -y), (-y, -x), (y, -x), (x, -y)
          </div>
          
          <h4>Algorithm Formulation:</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.85rem;">
            <li>Start at (0, R).</li>
            <li>Initial decision parameter: <strong>P<sub>0</sub> = 5/4 - R</strong> (or 1 - R for integer approximation).</li>
            <li>At each step k:
              <br>• If <strong>P<sub>k</sub> < 0</strong>: plot (x<sub>k</sub>+1, y<sub>k</sub>) and <strong>P<sub>k+1</sub> = P<sub>k</sub> + 2x<sub>k+1</sub> + 1</strong>
              <br>• If <strong>P<sub>k</sub> &ge; 0</strong>: plot (x<sub>k</sub>+1, y<sub>k</sub>-1) and <strong>P<sub>k+1</sub> = P<sub>k</sub> + 2x<sub>k+1</sub> - 2y<sub>k+1</sub> + 1</strong>
            </li>
            <li>Stop when x &ge; y.</li>
          </ul>
        </div>
        
        <div class="diagram-container">
          <svg class="svg-diagram" viewBox="0 0 200 200">
            <!-- Axes -->
            <line x1="20" y1="100" x2="180" y2="100" stroke="var(--border-color)" stroke-width="1"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="var(--border-color)" stroke-width="1"/>
            
            <!-- Circle -->
            <circle cx="100" cy="100" r="70" stroke="rgba(255,255,255,0.08)" fill="none" stroke-width="1"/>
            
            <!-- Symmetry Lines -->
            <line x1="43" y1="43" x2="157" y2="157" stroke="var(--border-color)" stroke-dasharray="2"/>
            <line x1="43" y1="157" x2="157" y2="43" stroke="var(--border-color)" stroke-dasharray="2"/>
            
            <!-- Highlight Octant 1 -->
            <path d="M 100 30 A 70 70 0 0 1 149 51 L 100 100 Z" fill="rgba(0, 242, 254, 0.1)" stroke="var(--primary-color)" stroke-width="2"/>
            
            <!-- Points representing 8-way symmetry -->
            <circle cx="149" cy="51" r="4" fill="var(--primary-color)" /> <!-- (x, y) -->
            <circle cx="149" cy="149" r="4" fill="var(--accent-purple)" />
            <circle cx="51" cy="149" r="4" fill="var(--accent-purple)" />
            <circle cx="51" cy="51" r="4" fill="var(--accent-purple)" />
            
            <circle cx="151" cy="73" r="4" fill="var(--success-color)" /> <!-- (y, x) -->
            <circle cx="151" cy="127" r="4" fill="var(--accent-purple)" />
            <circle cx="49" cy="127" r="4" fill="var(--accent-purple)" />
            <circle cx="49" cy="73" r="4" fill="var(--accent-purple)" />
            
            <text x="175" y="55" class="svg-text" font-size="8px" fill="var(--primary-color)">(x,y)</text>
            <text x="178" y="77" class="svg-text" font-size="8px" fill="var(--success-color)">(y,x)</text>
            
            <text x="100" y="112" class="svg-text" font-size="8px">Center (0,0)</text>
          </svg>
          <div class="diagram-caption">8-Way Circle Symmetry & calculated Octant</div>
        </div>
      </div>
    `
  },
  {
    title: "Midpoint Ellipse Drawing Algorithm",
    unit: "Unit-II",
    content: `
      <h2>Midpoint Ellipse Algorithm <span class="slide-unit-badge">Unit-II</span></h2>
      <p>The Midpoint Ellipse Drawing algorithm plots pixels for one quadrant of an ellipse centered at (0,0) and mirrors them into the other three quadrants (4-way symmetry).</p>
      
      <div class="info-callout">
        <h4>Two-Region Division:</h4>
        The curve of an ellipse changes slope rapidly. We split Region 1 and Region 2 at the point where the tangent slope is -1 (dy/dx = -1).
        <br>• **Region 1:** Slope > -1 (Increments along the x-axis). Condition: 2r<sub>y</sub><sup>2</sup>x < 2r<sub>x</sub><sup>2</sup>y.
        <br>• **Region 2:** Slope &le; -1 (Increments along the y-axis). Condition: 2r<sub>y</sub><sup>2</sup>x &ge; 2r<sub>x</sub><sup>2</sup>y.
      </div>

      <div class="math-box" style="font-size:0.82rem;">
        <p><strong>Decision Variables summary:</strong></p>
        <strong>Region 1:</strong> Start (0, r_y)
        <br>• Initial: P1_0 = r_y<sup>2</sup> - r_x<sup>2</sup>r_y + 1/4 r_x<sup>2</sup>
        <br>• If P1_k < 0: Next (x+1, y), P1_{k+1} = P1_k + 2r_y<sup>2</sup>x + r_y<sup>2</sup>
        <br>• Else: Next (x+1, y-1), P1_{k+1} = P1_k + 2r_y<sup>2</sup>x - 2r_x<sup>2</sup>y + r_y<sup>2</sup>
        <br><strong>Region 2:</strong> Start (x_last, y_last) from Region 1
        <br>• Initial: P2_0 = r_y<sup>2</sup>(x_0+1/2)<sup>2</sup> + r_x<sup>2</sup>(y_0-1)<sup>2</sup> - r_x<sup>2</sup>r_y<sup>2</sup>
        <br>• If P2_k > 0: Next (x, y-1), P2_{k+1} = P2_k - 2r_x<sup>2</sup>y + r_x<sup>2</sup>
        <br>• Else: Next (x+1, y-1), P2_{k+1} = P2_k + 2r_y<sup>2</sup>x - 2r_x<sup>2</sup>y + r_x<sup>2</sup>
      </div>
    `
  },
  {
    title: "Thick Primitives Drawing Methods",
    unit: "Unit-II",
    content: `
      <h2>Thick Primitives Drawing <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Standard scan-conversion algorithms generate primitives of 1-pixel width. Drawing **thick primitives** requires modifying the drawing routine based on line width parameters.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>1. Double-Pixel / Duplicate Method</h4>
          <p style="font-size:0.88rem; margin-bottom: 0;">
            Simply replicate pixels horizontally or vertically.
            <br>• <strong>If slope |m| &le; 1 (horizontal line):</strong> For each calculated coordinate (x,y), plot a vertical column of pixels of height <em>W</em> centered on <em>y</em>.
            <br>• <strong>If slope |m| > 1 (vertical line):</strong> For each coordinate (x,y), plot a horizontal row of pixels of width <em>W</em> centered on <em>x</em>.
          </p>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color: var(--accent-purple);">2. Pen/Brush Methods</h4>
          <p style="font-size:0.88rem; margin-bottom: 0;">
            Simulate moving a graphic "brush" or "pen" along the path of the line.
            <br>• The brush can be a square or circular cursor of size W &times; W.
            <br>• As the line coordinates are calculated, the brush is centered at each pixel (x,y), plotting all pixels overlaid by the brush geometry.
            <br>• Circular brushes produce much smoother line caps and joins.
          </p>
        </div>
      </div>

      <div class="math-box">
        <p><strong>Calculating Pixel Offsets for Thick Lines:</strong></p>
        Given width W:
        <span class="code-line">Number of pixels to duplicate = W - 1</span>
        <span class="code-line">Plot offsets from: -L to +L where L = floor((W - 1) / 2)</span>
        For a line with slope |m| < 1, draw (x, y + i) for i in [-L, L].
      </div>
    `
  },
  {
    title: "Polygon Filling & Scan-Line Edge Tables",
    unit: "Unit-II",
    content: `
      <h2>Polygon Filling & Scan-Line Tables <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Polygon filling identifies and colors all pixels located inside the boundaries of a polygon. Let's look at the mathematical data structures used in the **Scan-Line Polygon Fill** algorithm.</p>
      
      <div class="info-callout">
        <h4>Scan-Line Data Structures (Crucial Exam Topic):</h4>
        To avoid checking every pixel against every edge, we construct two tables:
        <br>1. **Edge Table (ET):** Stores all polygon edges sorted by their minimum Y coordinate ($y_{min}$). Edge buckets contain:
        <span style="font-family:var(--font-mono); color:var(--primary-color); display:block; padding:0.25rem 0;">  [y_max, x_val_at_y_min, 1/m]</span>
        Horizontal edges ($m=0$) are discarded.
        <br>2. **Active Edge Table (AET):** Stores list of edges that intersect the *current* scan line, sorted by their active $x$ intersections.
      </div>

      <div class="slide-grid-2">
        <div class="math-box" style="margin:0; font-size:0.85rem;">
          <p><strong>Scan-line Step-by-Step Logic:</strong></p>
          1. Set current scan line Y to smallest $y_{min}$ in ET.
          <br>2. Move edges from ET bucket Y to AET.
          <br>3. Sort edges in AET by $x$.
          <br>4. Fill pixels between odd/even pairs of intersections (e.g. AET[0].x to AET[1].x).
          <br>5. Increment Y by 1 (move to next scan line).
          <br>6. Remove edges from AET if Y &ge; $y_{max}$.
          <br>7. Update $x$ values in AET: $x_{new} = x_{old} + 1/m$.
          <br>8. Re-sort AET by $x$ and repeat.
        </div>

        <div class="info-callout" style="margin:0; border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">Recursive Area Fill Rules:</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.85rem; gap: 0.4rem;">
            <li><strong>Boundary-Fill:</strong> Paints neighbors until it hits a specific boundary color.
              <br>• *Hazard:* Leaks through diagonal crevices if using 4-connected scan in an 8-connected boundary.
            </li>
            <li><strong>Flood-Fill:</strong> Replaces target background color. Used when boundary has multiple colors.
              <br>• *4-Connected:* Explores directions: $(x\pm1, y)$, $(x, y\pm1)$.
              <br>• *8-Connected:* Explores orthogonal + diagonal neighbors.
            </li>
          </ul>
        </div>
      </div>
    `
  }
];

let currentSlideIdx = 0;

function initSlideshow() {
  const slideListNav = document.getElementById('slide-list-nav');
  const slideContainer = document.getElementById('slide-container');
  const currentSlideNum = document.getElementById('current-slide-num');
  const totalSlideNum = document.getElementById('total-slide-num');
  const prevSlideBtn = document.getElementById('prev-slide');
  const nextSlideBtn = document.getElementById('next-slide');
  const slideProgressBar = document.getElementById('slide-progress-bar');
  
  // Total slides
  totalSlideNum.textContent = slidesData.length;
  
  // Populate Sidebar
  slideListNav.innerHTML = '';
  slidesData.forEach((slide, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = `slide-nav-item ${index === 0 ? 'active' : ''}`;
    button.innerHTML = `<span class="slide-num">${String(index+1).padStart(2, '0')}</span> ${slide.title}`;
    button.addEventListener('click', () => {
      loadSlide(index);
    });
    li.appendChild(button);
    slideListNav.appendChild(li);
  });
  
  // Load initial slide
  loadSlide(0);
  
  // Slide loading logic
  function loadSlide(index) {
    if (index < 0 || index >= slidesData.length) return;
    currentSlideIdx = index;
    
    // Update container HTML
    slideContainer.innerHTML = `<div class="slide-content">${slidesData[index].content}</div>`;
    
    // Update numerical indicator
    currentSlideNum.textContent = index + 1;
    
    // Update progress bar width
    const pct = ((index + 1) / slidesData.length) * 100;
    slideProgressBar.style.width = `${pct}%`;
    
    // Update sidebar active buttons
    const navItems = document.querySelectorAll('.slide-nav-item');
    navItems.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('active');
        btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Disable/Enable buttons
    prevSlideBtn.disabled = index === 0;
    nextSlideBtn.disabled = index === slidesData.length - 1;
  }
  
  // Navigation Events
  prevSlideBtn.addEventListener('click', () => {
    if (currentSlideIdx > 0) loadSlide(currentSlideIdx - 1);
  });
  
  nextSlideBtn.addEventListener('click', () => {
    if (currentSlideIdx < slidesData.length - 1) loadSlide(currentSlideIdx + 1);
  });
  
  // Keyboard Arrow Listeners
  document.addEventListener('keydown', (e) => {
    // Only trigger if in slides section active tab
    const slidesTab = document.getElementById('slides-section');
    if (slidesTab.classList.contains('active')) {
      if (e.key === 'ArrowLeft' && currentSlideIdx > 0) {
        loadSlide(currentSlideIdx - 1);
      } else if (e.key === 'ArrowRight' && currentSlideIdx < slidesData.length - 1) {
        loadSlide(currentSlideIdx + 1);
      }
    }
  });
}

// ==========================================
// STUDY FLASHCARDS DATA & CONTROLLER
// ==========================================
const flashcardsDataCG = [
  {
    category: "Graphics Hardware",
    question: "Compare Raster Scan and Random Scan Display systems on line smoothness.",
    answer: "<ul><li><strong>Random Scan (Vector):</strong> Draws lines directly by deflecting the electron beam along paths. This creates perfectly smooth lines with no pixelation (no aliasing).</li><li><strong>Raster Scan:</strong> Sweeps row-by-row. Lines must be split into grid pixels (scan-converted), which creates staircase jagged edges (aliasing).</li></ul>"
  },
  {
    category: "Graphics System Terminology",
    question: "Define the term <strong>Aspect Ratio</strong> and how it affects drawing a circle.",
    answer: "Aspect Ratio is the ratio of screen width to height (e.g., 4:3). When drawing shapes, if we do not account for the physical spacing of pixels vertically vs horizontally, plotting equal pixel coordinates (e.g., radius 10 in x and y) will result in a distorted ellipse instead of a perfect circle."
  },
  {
    category: "Frame Buffer Calculations",
    question: "Calculate the size of a frame buffer for a system with <strong>1920 &times; 1080</strong> resolution and <strong>8-bit</strong> color depth.",
    answer: "<p>Total Pixels = 1920 &times; 1080 = 2,073,600 pixels</p><p>Memory size = 2,073,600 &times; 8 bits = 16,588,800 bits</p><p>In bytes: 16,588,800 / 8 = <strong>2,073,600 Bytes (~1.98 MB)</strong></p>"
  },
  {
    category: "Hardware Components",
    question: "Explain the purpose of a <strong>Video Controller</strong> in a Raster Scan system.",
    answer: "The video controller coordinates display operations. It reads intensity data from the frame buffer at the refresh rate, converts these binary values to analog voltages via a DAC (Digital-to-Analog Converter), and directs the electron beam coordinates to illuminate the screen phosphors row-by-row."
  },
  {
    category: "CRT Display Systems",
    question: "What is **Phosphor Persistence** and how does it affect display design?",
    answer: "Persistence is the time it takes for screen emitted light to decay to 10% of its initial intensity. <br>• **Short persistence** phosphors decay quickly and require high refresh rates (60Hz+) to prevent flickering.<br>• **Long persistence** phosphors hold images longer (useful for static schematics) but create ghosting trails/blurring during animations."
  },
  {
    category: "CRT Display Systems",
    question: "Describe the roles of the **Control Grid** and **Focusing/Accelerating Anodes** in a CRT.",
    answer: "• **Control Grid:** Controls the brightness/intensity of the picture by regulating the flow of electrons passing through its grid aperture.<br>• **Focusing Anode:** Focuses the diverging electron stream into a thin, fine focal spot on the screen.<br>• **Accelerating Anode:** Uses positive voltage potential to speed up the electrons, giving them enough kinetic energy to excite the phosphor layer upon impact."
  },
  {
    category: "Line Drawing Algorithms",
    question: "What is the primary difference in arithmetic operations between the <strong>DDA</strong> and <strong>Bresenham's</strong> line algorithms?",
    answer: "<ul><li><strong>DDA:</strong> Uses floating-point numbers. It requires decimal addition at each step and calls a slow <code>round()</code> function to determine the target pixel.</li><li><strong>Bresenham:</strong> Uses integer-only arithmetic. It evaluates a decision variable using simple additions and left shifts, eliminating decimals entirely.</li></ul>"
  },
  {
    category: "Line Drawing Algorithms",
    question: "Write down the initial decision variable <code>P<sub>0</sub></code> formula for Bresenham's line algorithm (for 0 &le; m &le; 1).",
    answer: "The initial decision variable is: <code>P<sub>0</sub> = 2&Delta;y - &Delta;x</code>, where &Delta;y = y<sub>1</sub> - y<sub>0</sub> and &Delta;x = x<sub>1</sub> - x<sub>0</sub>."
  },
  {
    category: "Circle Algorithms",
    question: "Explain the concept of <strong>8-way symmetry</strong> of a circle and write the coordinates generated from point <code>(x, y)</code>.",
    answer: "A circle is symmetrical about the x-axis, y-axis, and diagonals y=x and y=-x. If point <code>(x,y)</code> lies in the first octant, we can mirror it to get: <code>(y,x), (-y,x), (-x,y), (-x,-y), (-y,-x), (y,-x), (x,-y)</code>. This allows us to calculate only 1/8th of the circle (0 to 45&deg;)."
  },
  {
    category: "Circle Algorithms",
    question: "What is the initial decision parameter <code>P<sub>0</sub></code> in the <strong>Midpoint Circle drawing algorithm</strong>?",
    answer: "For a circle of radius R, starting at (0, R), the initial decision parameter is: <code>P<sub>0</sub> = 5/4 - R</code> (or <code>1 - R</code> if working strictly with integer approximations)."
  },
  {
    category: "Ellipse Algorithms",
    question: "Why do we divide the <strong>Midpoint Ellipse Algorithm</strong> into Region 1 and Region 2?",
    answer: "Because the slope of the curve changes. In Region 1, the curve has a slope > -1 (moving faster horizontally), so we increment x. In Region 2, the slope is &le; -1 (moving faster vertically), so we decrement y. The dividing boundary is where the tangent slope is -1, which is when <code>2r<sub>y</sub><sup>2</sup>x = 2r<sub>x</sub><sup>2</sup>y</code>."
  },
  {
    category: "Area Filling Algorithms",
    question: "Compare <strong>Boundary-Fill</strong> and <strong>Flood-Fill</strong> algorithms. When is Flood-fill used?",
    answer: "<ul><li><strong>Boundary-fill:</strong> Fills a region until it encounters a single specific boundary color. It requires the shape boundary to be completely uniform in color.</li><li><strong>Flood-fill:</strong> Replaces a target background color with a fill color. It is used when the shape boundary contains multiple colors or no distinct boundary.</li></ul>"
  },
  {
    category: "Area Filling Algorithms",
    question: "Explain the **Active Edge Table (AET)** and **Edge Table (ET)** used in Scan-Line Polygon Filling.",
    answer: "• **Edge Table (ET):** Stores all non-horizontal edges sorted in buckets according to their minimum Y coordinate ($y_{min}$). It helps identify when an edge first intersects a scan line.<br>• **Active Edge Table (AET):** Stores only the edges intersecting the *current* scan line Y, sorted by their current X coordinates. It is updated at each scan line by removing completed edges ($Y \\ge y_{max}$) and updating X intersections using $x_{new} = x_{old} + 1/m$."
  },
  {
    category: "Area Filling Algorithms",
    question: "Explain the **Even-Odd Rule** inside-outside test for polygons.",
    answer: "Draw a straight line ray from any point P to a position outside the polygon. Count the number of polygon edge crossings. If the number of crossings is **Odd**, the point P is **Inside** the polygon. If the number of crossings is **Even**, the point P is **Outside** the polygon."
  },
  {
    category: "Thick Primitives",
    question: "How does the **Pixel Replication Method** paint a line of width W if the line slope is horizontal (|m| &le; 1)?",
    answer: "For each computed pixel (x, y) along the line path, we paint a vertical column of pixels from <code>y - (W-1)/2</code> to <code>y + (W-1)/2</code>. Replicating vertically ensures the line width appears uniform for horizontal-trending paths."
  }
];

let activeCardIdx = 0;
let cardStates = []; // Array tracking 'mastered' or 'review' for each card

function initFlashcards() {
  const flashcard = document.getElementById('flashcard');
  const flashcardWrapper = document.getElementById('flashcard-wrapper');
  const questionEl = document.getElementById('card-question');
  const answerEl = document.getElementById('card-answer');
  const catFront = document.getElementById('card-cat-front');
  const catBack = document.getElementById('card-cat-back');
  
  const indicator = document.getElementById('card-index-indicator');
  const totalCountEl = document.getElementById('card-total-count');
  const masteredCountEl = document.getElementById('card-mastered-count');
  const reviewCountEl = document.getElementById('card-review-count');
  const radialProgress = document.getElementById('flashcard-radial-progress');
  const pctText = document.getElementById('flashcard-pct-text');
  
  const prevBtn = document.getElementById('prev-card');
  const nextBtn = document.getElementById('next-card');
  const masterBtn = document.getElementById('card-btn-master');
  const reviewBtn = document.getElementById('card-btn-review');
  const resetBtn = document.getElementById('reset-cards-btn');
  
  // Load card states from local storage if exists
  const storageKey = activeSubject === 'cg' ? 'cg_flashcard_states' : 'cs_flashcard_states';
  const storedStates = localStorage.getItem(storageKey);
  if (storedStates) {
    cardStates = JSON.parse(storedStates);
  } else {
    cardStates = flashcardsData.map(() => 'unstudied');
  }
  
  totalCountEl.textContent = flashcardsData.length;
  
  // Flip handler
  if (!window.flashcardsListenersAttached) {
    flashcardWrapper.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
      // Enable state buttons once flipped
      if (flashcard.classList.contains('flipped')) {
        masterBtn.disabled = false;
        reviewBtn.disabled = false;
      }
    });
  }
  
  function updateUI() {
    // Reset flip status
    flashcard.classList.remove('flipped');
    masterBtn.disabled = true;
    reviewBtn.disabled = true;
    
    // Load content
    if (activeCardIdx >= flashcardsData.length) {
      activeCardIdx = 0;
    }
    const cardData = flashcardsData[activeCardIdx];
    if (cardData) {
      catFront.textContent = cardData.category;
      catBack.textContent = `${cardData.category} - Answer`;
      questionEl.innerHTML = cardData.question;
      answerEl.innerHTML = cardData.answer;
    }
    
    // Indicators
    indicator.textContent = `Card ${activeCardIdx + 1} of ${flashcardsData.length}`;
    
    // Stats calculation
    const mastered = cardStates.filter(s => s === 'mastered').length;
    const review = cardStates.filter(s => s === 'review').length;
    
    masteredCountEl.textContent = mastered;
    reviewCountEl.textContent = review;
    
    // Calculate percentage progress
    const pct = flashcardsData.length > 0 ? Math.round((mastered / flashcardsData.length) * 100) : 0;
    pctText.textContent = `${pct}%`;
    
    // Radial SVG stroke dashoffset
    const circ = 2 * Math.PI * 50;
    radialProgress.style.strokeDasharray = `${circ} ${circ}`;
    const offset = circ - (pct / 100) * circ;
    radialProgress.style.strokeDashoffset = offset;
    
    // Disable/Enable Nav buttons
    prevBtn.disabled = activeCardIdx === 0;
    nextBtn.disabled = activeCardIdx === flashcardsData.length - 1;
    
    // Highlight if already marked
    if (cardStates[activeCardIdx] === 'mastered') {
      flashcard.style.borderColor = 'var(--success-color)';
    } else if (cardStates[activeCardIdx] === 'review') {
      flashcard.style.borderColor = 'var(--warning-color)';
    } else {
      flashcard.style.borderColor = 'var(--border-color)';
    }
    
    localStorage.setItem(storageKey, JSON.stringify(cardStates));
  }
  
  if (!window.flashcardsListenersAttached) {
    // Navigation
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeCardIdx > 0) {
        activeCardIdx--;
        updateUI();
      }
    });
    
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeCardIdx < flashcardsData.length - 1) {
        activeCardIdx++;
        updateUI();
      }
    });
    
    // Marking Handlers
    masterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardStates[activeCardIdx] = 'mastered';
      updateUI();
      // Auto advance after short delay
      setTimeout(() => {
        if (activeCardIdx < flashcardsData.length - 1) {
          activeCardIdx++;
          updateUI();
        }
      }, 400);
    });
    
    reviewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardStates[activeCardIdx] = 'review';
      updateUI();
      setTimeout(() => {
        if (activeCardIdx < flashcardsData.length - 1) {
          activeCardIdx++;
          updateUI();
        }
      }, 400);
    });
    
    resetBtn.addEventListener('click', () => {
      cardStates = flashcardsData.map(() => 'unstudied');
      activeCardIdx = 0;
      updateUI();
    });
    
    window.flashcardsListenersAttached = true;
  }
  
  updateUI();
}

// ==========================================
// ALGORITHM VISUALIZERS IMPLEMENTATION
// ==========================================
const GRID_SIZE = 20;
let visualizerState = {
  selectedAlgo: 'line-dda',
  grid: Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill('empty')), // 'empty', 'plotted', 'current', 'boundary', 'fill'
  currentStep: -1,
  stepsQueue: [], // Array of { plotted: [[x,y]..], current: [x,y], math: { desc, values: {} } }
  isPlaying: false,
  playTimer: null,
  stepDelay: 300,
  
  // For Polygon Fill interaction
  polygonPenMode: 'boundary', // 'boundary' or 'seed'
  seedPoint: null
};

// Create visual grid elements in DOM
function createGridDOM() {
  const gridContainer = document.getElementById('pixel-grid');
  gridContainer.innerHTML = '';
  
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const cell = document.createElement('div');
      cell.className = 'pixel-cell';
      
      // Cartesian coordinates translation: 
      // DOM row r maps to Cartesian y = (19 - r)
      // DOM col c maps to Cartesian x = c
      const x = c;
      const y = GRID_SIZE - 1 - r;
      cell.dataset.x = x;
      cell.dataset.y = y;
      
      cell.addEventListener('click', () => handleGridClick(x, y));
      gridContainer.appendChild(cell);
    }
  }
}

// Coordinate translation helper
function getCellElement(x, y) {
  const row = GRID_SIZE - 1 - y;
  const col = x;
  if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return null;
  const index = row * GRID_SIZE + col;
  return document.getElementById('pixel-grid').children[index];
}

// Update grid visualization in DOM based on internal state
function updateGridDOM(plottedList, currentPoint, boundaryList = [], fillList = []) {
  // Clear all cell states
  const cells = document.querySelectorAll('.pixel-cell');
  cells.forEach(c => {
    c.className = 'pixel-cell';
  });
  
  // Render Boundaries (red)
  boundaryList.forEach(([bx, by]) => {
    const el = getCellElement(bx, by);
    if (el) el.classList.add('active-boundary');
  });
  
  // Render Filled Pixels (green)
  fillList.forEach(([fx, fy]) => {
    const el = getCellElement(fx, fy);
    if (el) el.classList.add('active-fill-cyan');
  });
  
  // Render Plotted Pixels (cyan)
  plottedList.forEach(([px, py]) => {
    const el = getCellElement(px, py);
    if (el) el.classList.add('active-plotted');
  });
  
  // Render Current cell evaluated (purple)
  if (currentPoint) {
    const el = getCellElement(currentPoint[0], currentPoint[1]);
    if (el) {
      el.classList.add('active-current');
    }
  }
}

// Grid Clicking logic (used for Polygon Fills)
function handleGridClick(x, y) {
  if (!visualizerState.selectedAlgo.startsWith('fill-')) return;
  
  if (visualizerState.polygonPenMode === 'boundary') {
    // Check if already boundary, toggle it
    const index = visualizerState.stepsQueue.length > 0 ? visualizerState.currentStep : -1;
    let boundaries = [];
    
    if (index >= 0 && visualizerState.stepsQueue[index]) {
      boundaries = [...visualizerState.stepsQueue[index].boundaryList];
    } else {
      // Base state boundaries
      boundaries = visualizerState.grid.flatMap((row, ri) => 
        row.map((val, ci) => val === 'boundary' ? [ci, GRID_SIZE-1-ri] : null)
      ).filter(Boolean);
    }
    
    const existsIdx = boundaries.findIndex(([bx, by]) => bx === x && by === y);
    if (existsIdx >= 0) {
      boundaries.splice(existsIdx, 1);
      visualizerState.grid[GRID_SIZE - 1 - y][x] = 'empty';
    } else {
      boundaries.push([x, y]);
      visualizerState.grid[GRID_SIZE - 1 - y][x] = 'boundary';
    }
    
    // Reset and compute
    resetVisualizerEngine();
    updateGridDOM([], null, boundaries, []);
  } else if (visualizerState.polygonPenMode === 'seed') {
    // Check that it's not a boundary
    if (visualizerState.grid[GRID_SIZE - 1 - y][x] === 'boundary') return;
    
    visualizerState.seedPoint = [x, y];
    
    // Reset and compute
    resetVisualizerEngine();
    generateAlgorithmSteps();
    renderStep(0);
  }
}

// ==========================================
// STEP GENERATORS FOR THE ALGORITHMS
// ==========================================
function generateAlgorithmSteps() {
  visualizerState.stepsQueue = [];
  const algo = visualizerState.selectedAlgo;
  
  if (algo === 'line-dda') {
    generateDDALineSteps();
  } else if (algo === 'line-bresenham') {
    generateBresenhamLineSteps();
  } else if (algo === 'circle-midpoint') {
    generateMidpointCircleSteps();
  } else if (algo === 'ellipse-midpoint') {
    generateMidpointEllipseSteps();
  } else if (algo.startsWith('fill-')) {
    generatePolygonFillSteps();
  }
}

// 1. DDA Line Drawing
function generateDDALineSteps() {
  const x0 = parseInt(document.getElementById('line-x0').value);
  const y0 = parseInt(document.getElementById('line-y0').value);
  const x1 = parseInt(document.getElementById('line-x1').value);
  const y1 = parseInt(document.getElementById('line-y1').value);
  
  const dx = x1 - x0;
  const dy = y1 - y0;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  
  const xInc = dx / steps;
  const yInc = dy / steps;
  
  let x = x0;
  let y = y0;
  
  const plotted = [];
  
  // Push Step 0
  plotted.push([Math.round(x), Math.round(y)]);
  visualizerState.stepsQueue.push({
    plotted: [...plotted],
    current: [Math.round(x), Math.round(y)],
    math: {
      step: 0,
      x: x.toFixed(2),
      y: y.toFixed(2),
      plotX: Math.round(x),
      plotY: Math.round(y),
      desc: `Initial endpoint plotted at (x<sub>0</sub>, y<sub>0</sub>)`
    }
  });
  
  for (let k = 1; k <= steps; k++) {
    x += xInc;
    y += yInc;
    const px = Math.round(x);
    const py = Math.round(y);
    plotted.push([px, py]);
    
    visualizerState.stepsQueue.push({
      plotted: [...plotted],
      current: [px, py],
      math: {
        step: k,
        x: x.toFixed(2),
        y: y.toFixed(2),
        plotX: px,
        plotY: py,
        desc: `Step ${k}: Added increments. Rounding yields (${px}, ${py})`
      }
    });
  }
}

// 2. Bresenham Line Drawing (Generalized for slope 0 <= m <= 1 display trace, plots correct directions)
function generateBresenhamLineSteps() {
  const x0 = parseInt(document.getElementById('line-x0').value);
  const y0 = parseInt(document.getElementById('line-y0').value);
  const x1 = parseInt(document.getElementById('line-x1').value);
  const y1 = parseInt(document.getElementById('line-y1').value);
  
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  
  const isSlopeLessThanOne = dx >= dy;
  
  let x = x0;
  let y = y0;
  const plotted = [];
  
  plotted.push([x, y]);
  
  // Standard derivation decision variable (assuming dx >= dy and sx=1, sy=1)
  let p = 2 * dy - dx;
  
  visualizerState.stepsQueue.push({
    plotted: [...plotted],
    current: [x, y],
    math: {
      step: 0,
      x: x,
      y: y,
      pk: '-',
      desc: `Initial point plotted at (${x}, ${y}). dx=${dx}, dy=${dy}`
    }
  });
  
  let currentP = p;
  let stepCount = 1;
  
  if (isSlopeLessThanOne) {
    // X increments/decrements at each step
    while (x !== x1) {
      const prevX = x;
      const prevY = y;
      x += sx;
      
      let pDisplay = currentP; // current pk to evaluate
      
      if (currentP < 0) {
        // Next pixel horizontal
        currentP += 2 * dy;
        visualizerState.stepsQueue.push({
          plotted: [...plotted, [x, y]],
          current: [x, y],
          math: {
            step: stepCount,
            x: x,
            y: y,
            pk: pDisplay,
            desc: `P<sub>k</sub> < 0: Select East pixel (${x}, ${y}). P<sub>k+1</sub> = P<sub>k</sub> + 2&Delta;y`
          }
        });
      } else {
        // Next pixel diagonal
        y += sy;
        currentP += 2 * dy - 2 * dx;
        visualizerState.stepsQueue.push({
          plotted: [...plotted, [x, y]],
          current: [x, y],
          math: {
            step: stepCount,
            x: x,
            y: y,
            pk: pDisplay,
            desc: `P<sub>k</sub> &ge; 0: Select North-East (${x}, ${y}). P<sub>k+1</sub> = P<sub>k</sub> + 2&Delta;y - 2&Delta;x`
          }
        });
      }
      plotted.push([x, y]);
      stepCount++;
    }
  } else {
    // Y increments/decrements at each step (slope > 1)
    let p_v = 2 * dx - dy;
    while (y !== y1) {
      y += sy;
      let pDisplay = p_v;
      
      if (p_v < 0) {
        p_v += 2 * dx;
        visualizerState.stepsQueue.push({
          plotted: [...plotted, [x, y]],
          current: [x, y],
          math: {
            step: stepCount,
            x: x,
            y: y,
            pk: pDisplay,
            desc: `P<sub>k</sub> < 0: Select North pixel (${x}, ${y}). P<sub>k+1</sub> = P<sub>k</sub> + 2&Delta;x`
          }
        });
      } else {
        x += sx;
        p_v += 2 * dx - 2 * dy;
        visualizerState.stepsQueue.push({
          plotted: [...plotted, [x, y]],
          current: [x, y],
          math: {
            step: stepCount,
            x: x,
            y: y,
            pk: pDisplay,
            desc: `P<sub>k</sub> &ge; 0: Select North-East (${x}, ${y}). P<sub>k+1</sub> = P<sub>k</sub> + 2&Delta;x - 2&Delta;y`
          }
        });
      }
      plotted.push([x, y]);
      stepCount++;
    }
  }
}

// 3. Midpoint Circle Drawing
function generateMidpointCircleSteps() {
  const xc = parseInt(document.getElementById('circle-xc').value);
  const yc = parseInt(document.getElementById('circle-yc').value);
  const r = parseInt(document.getElementById('circle-r').value);
  
  let x = 0;
  let y = r;
  let p = 1 - r; // Integer approximation of 5/4 - r
  
  let plotted = [];
  
  // Helper to plot 8 symmetrical points
  function getSymmetricPoints(cx, cy, px, py) {
    return [
      [cx + px, cy + py],
      [cx - px, cy + py],
      [cx + px, cy - py],
      [cx - px, cy - py],
      [cx + py, cy + px],
      [cx - py, cy + px],
      [cx + py, cy - px],
      [cx - py, cy - px]
    ];
  }
  
  let initialPoints = getSymmetricPoints(xc, yc, x, y);
  plotted.push(...initialPoints);
  
  visualizerState.stepsQueue.push({
    plotted: [...plotted],
    current: [xc + x, yc + y],
    math: {
      step: 0,
      x: x,
      y: y,
      pk: '-',
      desc: `Circle plotted at start (0, R) = (${x}, ${y}). Center: (${xc}, ${yc})`
    }
  });
  
  let stepCount = 1;
  while (x < y) {
    x++;
    let pDisplay = p;
    let action = '';
    
    if (p < 0) {
      p += 2 * x + 1;
      action = `P<sub>k</sub> < 0: Choose horizontal pixel. Next x=${x}, y=${y}. P<sub>k+1</sub> = P<sub>k</sub> + 2x + 1`;
    } else {
      y--;
      p += 2 * (x - y) + 1;
      action = `P<sub>k</sub> &ge; 0: Choose diagonal pixel. Next x=${x}, y=${y}. P<sub>k+1</sub> = P<sub>k</sub> + 2(x - y) + 1`;
    }
    
    let stepPoints = getSymmetricPoints(xc, yc, x, y);
    plotted.push(...stepPoints);
    
    visualizerState.stepsQueue.push({
      plotted: [...plotted],
      current: [xc + x, yc + y],
      math: {
        step: stepCount,
        x: x,
        y: y,
        pk: pDisplay,
        desc: `Step ${stepCount}: ${action}`
      }
    });
    
    stepCount++;
  }
}

// 4. Midpoint Ellipse Drawing
function generateMidpointEllipseSteps() {
  const xc = parseInt(document.getElementById('ellipse-xc').value);
  const yc = parseInt(document.getElementById('ellipse-yc').value);
  const rx = parseInt(document.getElementById('ellipse-rx').value);
  const ry = parseInt(document.getElementById('ellipse-ry').value);
  
  let plotted = [];
  
  function get4SymmetricPoints(cx, cy, px, py) {
    return [
      [cx + px, cy + py],
      [cx - px, cy + py],
      [cx + px, cy - py],
      [cx - px, cy - py]
    ];
  }
  
  let x = 0;
  let y = ry;
  
  // Region 1
  let p1 = ry * ry - rx * rx * ry + 0.25 * rx * rx;
  let dx = 2 * ry * ry * x;
  let dy = 2 * rx * rx * y;
  
  plotted.push(...get4SymmetricPoints(xc, yc, x, y));
  visualizerState.stepsQueue.push({
    plotted: [...plotted],
    current: [xc + x, yc + y],
    math: {
      step: 'R1-0',
      x: x,
      y: y,
      pk: '-',
      desc: `Region 1 Start at (0, R_y). Center (${xc}, ${yc})`
    }
  });
  
  let stepCount = 1;
  
  // Region 1 Loop
  while (dx < dy) {
    x++;
    dx += 2 * ry * ry;
    let pDisplay = p1;
    let action = '';
    
    if (p1 < 0) {
      p1 += ry * ry + dx;
      action = `P1<sub>k</sub> < 0: Horizontal step. Next x=${x}, y=${y}. P1 = P1 + r_y^2 + 2r_y^2 x`;
    } else {
      y--;
      dy -= 2 * rx * rx;
      p1 += ry * ry + dx - dy;
      action = `P1<sub>k</sub> &ge; 0: Diagonal step down. Next x=${x}, y=${y}. P1 = P1 + r_y^2 + 2r_y^2 x - 2r_x^2 y`;
    }
    
    plotted.push(...get4SymmetricPoints(xc, yc, x, y));
    visualizerState.stepsQueue.push({
      plotted: [...plotted],
      current: [xc + x, yc + y],
      math: {
        step: `R1-${stepCount}`,
        x: x,
        y: y,
        pk: pDisplay.toFixed(0),
        desc: `Region 1 Step ${stepCount}: ${action}`
      }
    });
    stepCount++;
  }
  
  // Region 2 Start
  let p2 = ry * ry * (x + 0.5) * (x + 0.5) + rx * rx * (y - 1) * (y - 1) - rx * rx * ry * ry;
  
  visualizerState.stepsQueue.push({
    plotted: [...plotted],
    current: [xc + x, yc + y],
    math: {
      step: 'R2-0',
      x: x,
      y: y,
      pk: '-',
      desc: `Transition to Region 2 (Slope &le; -1). Calculate P2<sub>0</sub> = ${p2.toFixed(0)}`
    }
  });
  
  stepCount = 1;
  // Region 2 Loop
  while (y > 0) {
    y--;
    dy -= 2 * rx * rx;
    let pDisplay = p2;
    let action = '';
    
    if (p2 > 0) {
      p2 += rx * rx - dy;
      action = `P2<sub>k</sub> > 0: Vertical step down. Next x=${x}, y=${y}. P2 = P2 + r_x^2 - 2r_x^2 y`;
    } else {
      x++;
      dx += 2 * ry * ry;
      p2 += rx * rx + dx - dy;
      action = `P2<sub>k</sub> &le; 0: Diagonal step down. Next x=${x}, y=${y}. P2 = P2 + r_x^2 + 2r_y^2 x - 2r_x^2 y`;
    }
    
    plotted.push(...get4SymmetricPoints(xc, yc, x, y));
    visualizerState.stepsQueue.push({
      plotted: [...plotted],
      current: [xc + x, yc + y],
      math: {
        step: `R2-${stepCount}`,
        x: x,
        y: y,
        pk: pDisplay.toFixed(0),
        desc: `Region 2 Step ${stepCount}: ${action}`
      }
    });
    stepCount++;
  }
}

// 5. Polygon Fill Step Generator (Animate BFS/DFS Queue cells for clarity)
function generatePolygonFillSteps() {
  if (!visualizerState.seedPoint) {
    // Push warning state
    visualizerState.stepsQueue.push({
      plotted: [],
      current: null,
      boundaryList: getBoundaryListFromGrid(),
      fillList: [],
      math: {
        step: 0,
        x: '-',
        y: '-',
        pk: '-',
        desc: `❌ No Seed pixel set! Click "Set Seed Mode" and click inside your polygon.`
      }
    });
    return;
  }
  
  const seed = visualizerState.seedPoint;
  const algo = visualizerState.selectedAlgo; // 'fill-boundary-4', 'fill-boundary-8', 'fill-flood-4'
  
  const boundaryList = getBoundaryListFromGrid();
  const fillList = [];
  const visited = new Set();
  
  // Queue for BFS animation trace (renders extremely nicely cell by cell)
  const queue = [seed];
  visited.add(`${seed[0]},${seed[1]}`);
  
  let stepCount = 0;
  
  // Prevent infinite loops in case boundary is open
  const maxSafetySteps = 250;
  
  visualizerState.stepsQueue.push({
    plotted: [],
    current: [...seed],
    boundaryList: [...boundaryList],
    fillList: [],
    math: {
      step: 0,
      x: seed[0],
      y: seed[1],
      pk: '-',
      desc: `Seed point set at (${seed[0]}, ${seed[1]}). Starting fill recursion...`
    }
  });
  
  while (queue.length > 0 && stepCount < maxSafetySteps) {
    const curr = queue.shift();
    const [cx, cy] = curr;
    
    // Check boundary collisions
    const isBoundary = boundaryList.some(([bx, by]) => bx === cx && by === cy);
    if (isBoundary) continue;
    
    // Add to fill list
    fillList.push([cx, cy]);
    stepCount++;
    
    // Explore neighbors
    const directions = [];
    if (algo === 'fill-boundary-4' || algo === 'fill-flood-4') {
      directions.push([0, 1], [0, -1], [1, 0], [-1, 0]); // Right, Left, Up, Down
    } else if (algo === 'fill-boundary-8') {
      directions.push(
        [0, 1], [0, -1], [1, 0], [-1, 0], // Orthogonal
        [1, 1], [1, -1], [-1, 1], [-1, -1] // Diagonals
      );
    }
    
    const addedNeighbors = [];
    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;
      
      // Keep inside bounds
      if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
        const isNeighborBoundary = boundaryList.some(([bx, by]) => bx === nx && by === ny);
        const key = `${nx},${ny}`;
        if (!isNeighborBoundary && !visited.has(key)) {
          visited.add(key);
          queue.push([nx, ny]);
          addedNeighbors.push(`(${nx},${ny})`);
        }
      }
    }
    
    visualizerState.stepsQueue.push({
      plotted: [],
      current: [cx, cy],
      boundaryList: [...boundaryList],
      fillList: [...fillList],
      math: {
        step: stepCount,
        x: cx,
        y: cy,
        pk: '-',
        desc: `Fill pixel (${cx}, ${cy}). Queueing neighbors: ${addedNeighbors.length > 0 ? addedNeighbors.join(', ') : 'None'}`
      }
    });
  }
  
  if (stepCount >= maxSafetySteps) {
    visualizerState.stepsQueue.push({
      plotted: [],
      current: null,
      boundaryList: [...boundaryList],
      fillList: [...fillList],
      math: {
        step: 'Warning',
        x: '-',
        y: '-',
        pk: '-',
        desc: `⚠️ Fill halted safety limit! Ensure your polygon is fully closed.`
      }
    });
  }
}

// Extract boundary coordinates from base grid setup
function getBoundaryListFromGrid() {
  const list = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (visualizerState.grid[r][c] === 'boundary') {
        list.push([c, GRID_SIZE - 1 - r]);
      }
    }
  }
  return list;
}

// ==========================================
// RENDER ALGORITHM STEP TRACE
// ==========================================
function renderStep(index) {
  if (index < 0 || index >= visualizerState.stepsQueue.length) return;
  visualizerState.currentStep = index;
  
  const stepData = visualizerState.stepsQueue[index];
  
  // Render shapes on grid
  if (visualizerState.selectedAlgo.startsWith('fill-')) {
    updateGridDOM([], stepData.current, stepData.boundaryList, stepData.fillList);
  } else {
    updateGridDOM(stepData.plotted, stepData.current, [], []);
  }
  
  // Update trace summary
  const summaryEl = document.getElementById('trace-summary');
  summaryEl.innerHTML = `<strong>Current Action:</strong> ${stepData.math.desc}`;
  
  // Highlight row in table
  updateTraceTableHighlight(index);
}

// Build trace table headers & rows
function rebuildTraceTable() {
  const headers = document.getElementById('trace-table-headers');
  const body = document.getElementById('trace-table-body');
  headers.innerHTML = '';
  body.innerHTML = '';
  
  const algo = visualizerState.selectedAlgo;
  
  // Build header keys
  const colKeys = [];
  if (algo === 'line-dda') {
    colKeys.push({ label: 'Step (k)', field: 'step' });
    colKeys.push({ label: 'Exact X', field: 'x' });
    colKeys.push({ label: 'Exact Y', field: 'y' });
    colKeys.push({ label: 'Plotted X', field: 'plotX' });
    colKeys.push({ label: 'Plotted Y', field: 'plotY' });
  } else if (algo === 'line-bresenham') {
    colKeys.push({ label: 'Step (k)', field: 'step' });
    colKeys.push({ label: 'Decision P_k', field: 'pk' });
    colKeys.push({ label: 'Plotted X', field: 'x' });
    colKeys.push({ label: 'Plotted Y', field: 'y' });
  } else if (algo === 'circle-midpoint') {
    colKeys.push({ label: 'Step (k)', field: 'step' });
    colKeys.push({ label: 'Decision P_k', field: 'pk' });
    colKeys.push({ label: 'Calculated X', field: 'x' });
    colKeys.push({ label: 'Calculated Y', field: 'y' });
  } else if (algo === 'ellipse-midpoint') {
    colKeys.push({ label: 'Step (k)', field: 'step' });
    colKeys.push({ label: 'Decision Parameter', field: 'pk' });
    colKeys.push({ label: 'Plot X', field: 'x' });
    colKeys.push({ label: 'Plot Y', field: 'y' });
  } else if (algo.startsWith('fill-')) {
    colKeys.push({ label: 'Step Count', field: 'step' });
    colKeys.push({ label: 'Filled Pixel X', field: 'x' });
    colKeys.push({ label: 'Filled Pixel Y', field: 'y' });
  }
  
  // Add description header
  colKeys.push({ label: 'Derivation Comments', field: 'desc' });
  
  // Render headers
  colKeys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.label;
    headers.appendChild(th);
  });
  
  // Render rows
  visualizerState.stepsQueue.forEach((step, idx) => {
    const tr = document.createElement('tr');
    tr.dataset.stepIdx = idx;
    tr.addEventListener('click', () => {
      pauseVisualizer();
      renderStep(idx);
    });
    
    colKeys.forEach(col => {
      const td = document.createElement('td');
      td.innerHTML = step.math[col.field] !== undefined ? step.math[col.field] : '-';
      tr.appendChild(td);
    });
    
    body.appendChild(tr);
  });
}

function updateTraceTableHighlight(stepIdx) {
  const rows = document.querySelectorAll('#trace-table-body tr');
  rows.forEach(r => {
    if (parseInt(r.dataset.stepIdx) === stepIdx) {
      r.classList.add('current-row');
      r.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else {
      r.classList.remove('current-row');
    }
  });
}

// Animation controller states
function playVisualizer() {
  if (visualizerState.isPlaying) return;
  
  // If at the end, reset back to step 0
  if (visualizerState.currentStep >= visualizerState.stepsQueue.length - 1) {
    visualizerState.currentStep = -1;
  }
  
  visualizerState.isPlaying = true;
  document.getElementById('viz-btn-play').innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
    Pause
  `;
  
  visualizerState.playTimer = setInterval(() => {
    if (visualizerState.currentStep < visualizerState.stepsQueue.length - 1) {
      renderStep(visualizerState.currentStep + 1);
    } else {
      pauseVisualizer();
    }
  }, visualizerState.stepDelay);
}

function pauseVisualizer() {
  if (!visualizerState.isPlaying) return;
  
  visualizerState.isPlaying = false;
  clearInterval(visualizerState.playTimer);
  document.getElementById('viz-btn-play').innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M8 5v14l11-7z"/></svg>
    Auto Play
  `;
}

// Step backward or forward
function stepVisualizer() {
  pauseVisualizer();
  if (visualizerState.currentStep < visualizerState.stepsQueue.length - 1) {
    renderStep(visualizerState.currentStep + 1);
  }
}

function resetVisualizerEngine() {
  pauseVisualizer();
  visualizerState.currentStep = -1;
  const summaryEl = document.getElementById('trace-summary');
  summaryEl.textContent = 'Reset. Press "Next Step" or "Auto Play" to trace.';
}

// Update the algorithm view and reload settings
function handleAlgoChange() {
  visualizerState.selectedAlgo = document.getElementById('algo-select').value;
  
  // Title mapping
  const titleMap = {
    'line-dda': 'DDA Line Algorithm Visualizer',
    'line-bresenham': 'Bresenham Line Algorithm (Integer-Only)',
    'circle-midpoint': 'Midpoint Circle Algorithm (8-Way Symmetry)',
    'ellipse-midpoint': 'Midpoint Ellipse Algorithm (Two Regions)',
    'fill-boundary-4': 'Boundary-Fill (4-Connected) Visualizer',
    'fill-boundary-8': 'Boundary-Fill (8-Connected) Visualizer',
    'fill-flood-4': 'Flood-Fill (4-Connected) Visualizer'
  };
  document.getElementById('visualizer-title').textContent = titleMap[visualizerState.selectedAlgo];
  
  // Input settings panel toggle
  const inputsLine = document.getElementById('inputs-line');
  const inputsCircle = document.getElementById('inputs-circle');
  const inputsEllipse = document.getElementById('inputs-ellipse');
  const inputsFill = document.getElementById('inputs-fill');
  
  inputsLine.classList.add('hidden');
  inputsCircle.classList.add('hidden');
  inputsEllipse.classList.add('hidden');
  inputsFill.classList.add('hidden');
  
  if (visualizerState.selectedAlgo.startsWith('line')) {
    inputsLine.classList.remove('hidden');
  } else if (visualizerState.selectedAlgo.startsWith('circle')) {
    inputsCircle.classList.remove('hidden');
  } else if (visualizerState.selectedAlgo.startsWith('ellipse')) {
    inputsEllipse.classList.remove('hidden');
  } else if (visualizerState.selectedAlgo.startsWith('fill')) {
    inputsFill.classList.remove('hidden');
    // Clear polygon setup
    clearPolygonData();
  }
  
  // Regenerate
  resetVisualizerEngine();
  generateAlgorithmSteps();
  rebuildTraceTable();
  if (visualizerState.stepsQueue.length > 0) {
    renderStep(0);
  }
}

function clearPolygonData() {
  visualizerState.grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill('empty'));
  visualizerState.seedPoint = null;
  visualizerState.polygonPenMode = 'boundary';
  document.getElementById('current-pen-indicator').textContent = 'Drawing Boundary';
  document.getElementById('current-pen-indicator').className = 'badge bg-secondary';
}

function initVisualizer() {
  createGridDOM();
  
  // Register form triggers
  document.getElementById('algo-select').addEventListener('change', handleAlgoChange);
  
  const coordinateInputs = document.querySelectorAll('.algo-inputs input');
  coordinateInputs.forEach(input => {
    input.addEventListener('change', () => {
      resetVisualizerEngine();
      generateAlgorithmSteps();
      rebuildTraceTable();
      if (visualizerState.stepsQueue.length > 0) {
        renderStep(0);
      }
    });
  });
  
  // Polygon pen toggle controls
  document.getElementById('btn-draw-boundary').addEventListener('click', () => {
    visualizerState.polygonPenMode = 'boundary';
    document.getElementById('current-pen-indicator').textContent = 'Drawing Boundary';
    document.getElementById('current-pen-indicator').className = 'badge bg-secondary';
  });
  
  document.getElementById('btn-set-seed').addEventListener('click', () => {
    visualizerState.polygonPenMode = 'seed';
    document.getElementById('current-pen-indicator').textContent = 'Placing Seed';
    document.getElementById('current-pen-indicator').className = 'badge bg-secondary';
  });
  
  document.getElementById('btn-clear-polygon').addEventListener('click', () => {
    clearPolygonData();
    resetVisualizerEngine();
    updateGridDOM([], null, [], []);
  });
  
  // Buttons
  document.getElementById('viz-btn-play').addEventListener('click', () => {
    if (visualizerState.isPlaying) {
      pauseVisualizer();
    } else {
      playVisualizer();
    }
  });
  
  document.getElementById('viz-btn-step').addEventListener('click', stepVisualizer);
  document.getElementById('viz-btn-reset').addEventListener('click', () => {
    resetVisualizerEngine();
    if (visualizerState.selectedAlgo.startsWith('fill')) {
      clearPolygonData();
      updateGridDOM([], null, [], []);
    } else {
      if (visualizerState.stepsQueue.length > 0) {
        renderStep(0);
      }
    }
  });
  
  // Speed slider
  const speedRange = document.getElementById('speed-range');
  const speedLabel = document.getElementById('speed-label');
  speedRange.addEventListener('input', (e) => {
    visualizerState.stepDelay = parseInt(e.target.value);
    speedLabel.textContent = `${visualizerState.stepDelay}ms`;
    
    // If playing, restart with new speed
    if (visualizerState.isPlaying) {
      clearInterval(visualizerState.playTimer);
      visualizerState.playTimer = setInterval(() => {
        if (visualizerState.currentStep < visualizerState.stepsQueue.length - 1) {
          renderStep(visualizerState.currentStep + 1);
        } else {
          pauseVisualizer();
        }
      }, visualizerState.stepDelay);
    }
  });
  
  // Load initial algo
  handleAlgoChange();
}

// ==========================================
// 4. C LAB PROGRAMS & EMULATOR SIMULATOR
// ==========================================

const cprogramsData = [
  {
    id: "translation-2d",
    title: "1. 2D Translation of an Object",
    fileName: "TRANS2D.C",
    desc: "2D Translation shifts an object from position (x, y) to a new position (x', y') by adding translation distances tx and ty. Formulas: x' = x + tx, y' = y + ty.",
    code: `/* 
   2D Translation of a Triangle in graphics.h 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void main() {
    int gd = DETECT, gm;
    int x1 = 150, y1 = 150;
    int x2 = 250, y2 = 150;
    int x3 = 200, y3 = 250;
    int tx, ty;
    
    printf("Enter translation factors tx and ty: ");
    scanf("%d %d", &tx, &ty);
    
    /* Initialize graphics mode */
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    /* Draw Original Triangle in WHITE */
    setcolor(WHITE);
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x1, y1);
    outtextxy(x1 - 10, y1 - 15, "Original");
    
    /* Draw Translated Triangle in CYAN */
    setcolor(CYAN);
    line(x1 + tx, y1 + ty, x2 + tx, y2 + ty);
    line(x2 + tx, y2 + ty, x3 + tx, y3 + ty);
    line(x3 + tx, y3 + ty, x1 + tx, y1 + ty);
    outtextxy(x1 + tx - 10, y1 + ty - 15, "Translated");
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "tx", label: "Translation Tx", type: "range", min: -100, max: 200, val: 100 },
      { id: "ty", label: "Translation Ty", type: "range", min: -100, max: 200, val: 50 }
    ],
    draw: function(ctx, w, h, params) {
      const tx = parseInt(params.tx);
      const ty = parseInt(params.ty);
      
      const x1 = 150, y1 = 150;
      const x2 = 250, y2 = 150;
      const x3 = 200, y3 = 250;
      
      // Draw original (dashed grey)
      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#888888";
      ctx.fillText("Original", x1 - 10, y1 - 10);
      
      // Draw translated (cyan)
      ctx.strokeStyle = "#00f2fe";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x1 + tx, y1 + ty);
      ctx.lineTo(x2 + tx, y2 + ty);
      ctx.lineTo(x3 + tx, y3 + ty);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#00f2fe";
      ctx.fillText("Translated", x1 + tx - 10, y1 + ty - 10);
      
      // Draw translation vectors
      ctx.strokeStyle = "rgba(155, 81, 224, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x1 + tx, y1 + ty);
      ctx.moveTo(x2, y2); ctx.lineTo(x2 + tx, y2 + ty);
      ctx.moveTo(x3, y3); ctx.lineTo(x3 + tx, y3 + ty);
      ctx.stroke();
    }
  },
  {
    id: "rotation-2d",
    title: "2. 2D Rotation of an Object",
    fileName: "ROTATE.C",
    desc: "2D Rotation rotates an object by angle θ about a pivot point (xr, yr). Formulas: x' = xr + (x-xr)cosθ - (y-yr)sinθ, y' = yr + (x-xr)sinθ + (y-yr)cosθ.",
    code: `/* 
   2D Rotation of a Triangle about a Pivot Point 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>
#include <math.h>

void main() {
    int gd = DETECT, gm;
    int x1 = 300, y1 = 200;
    int x2 = 400, y2 = 200;
    int x3 = 350, y3 = 100;
    
    /* Pivot point is (300, 200) */
    int xr = 300, yr = 200; 
    float angle, rad;
    int rx1, ry1, rx2, ry2, rx3, ry3;
    
    printf("Enter rotation angle in degrees: ");
    scanf("%f", &angle);
    
    /* Convert degrees to radians */
    rad = angle * 3.14159 / 180.0;
    
    /* Calculate rotated coordinates */
    rx1 = xr + (x1 - xr)*cos(rad) - (y1 - yr)*sin(rad);
    ry1 = yr + (x1 - xr)*sin(rad) + (y1 - yr)*cos(rad);
    
    rx2 = xr + (x2 - xr)*cos(rad) - (y2 - yr)*sin(rad);
    ry2 = yr + (x2 - xr)*sin(rad) + (y2 - yr)*cos(rad);
    
    rx3 = xr + (x3 - xr)*cos(rad) - (y3 - yr)*sin(rad);
    ry3 = yr + (x3 - xr)*sin(rad) + (y3 - yr)*cos(rad);
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    /* Draw Original Triangle in WHITE */
    setcolor(WHITE);
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x1, y1);
    outtextxy(x2 + 5, y2, "Original");
    
    /* Draw Rotated Triangle in CYAN */
    setcolor(CYAN);
    line(rx1, ry1, rx2, ry2);
    line(rx2, ry2, rx3, ry3);
    line(rx3, ry3, rx1, ry1);
    outtextxy(rx2 + 5, ry2, "Rotated");
    
    /* Highlight Pivot Point */
    putpixel(xr, yr, RED);
    outtextxy(xr - 10, yr + 10, "Pivot");
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "angle", label: "Rotation Angle (deg)", type: "range", min: 0, max: 360, val: 45 }
    ],
    draw: function(ctx, w, h, params) {
      const angle = parseInt(params.angle);
      const rad = (angle * Math.PI) / 180.0;
      
      const x1 = 300, y1 = 200;
      const x2 = 400, y2 = 200;
      const x3 = 350, y3 = 100;
      const xr = 300, yr = 200; // pivot
      
      // Compute rotated coordinates
      const rx1 = xr + (x1 - xr) * Math.cos(rad) - (y1 - yr) * Math.sin(rad);
      const ry1 = yr + (x1 - xr) * Math.sin(rad) + (y1 - yr) * Math.cos(rad);
      
      const rx2 = xr + (x2 - xr) * Math.cos(rad) - (y2 - yr) * Math.sin(rad);
      const ry2 = yr + (x2 - xr) * Math.sin(rad) + (y2 - yr) * Math.cos(rad);
      
      const rx3 = xr + (x3 - xr) * Math.cos(rad) - (y3 - yr) * Math.sin(rad);
      const ry3 = yr + (x3 - xr) * Math.sin(rad) + (y3 - yr) * Math.cos(rad);
      
      // Draw original (dashed grey)
      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#888888";
      ctx.fillText("Original", x2 + 5, y2);
      
      // Draw rotated (cyan)
      ctx.strokeStyle = "#00f2fe";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(rx1, ry1); ctx.lineTo(rx2, ry2); ctx.lineTo(rx3, ry3); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#00f2fe";
      ctx.fillText("Rotated", rx2 + 5, ry2);
      
      // Pivot indicator
      ctx.fillStyle = "#ff0844";
      ctx.beginPath();
      ctx.arc(xr, yr, 4, 0, 2*Math.PI);
      ctx.fill();
      ctx.fillText("Pivot (xr, yr)", xr - 30, yr + 15);
    }
  },
  {
    id: "scaling-2d",
    title: "3. 2D Scaling of an Object",
    fileName: "SCALE.C",
    desc: "2D Scaling modifies the size of an object by multiplying coordinate offsets relative to a fixed point (xf, yf) by scaling factors sx and sy. Formulas: x' = xf + (x-xf)*sx, y' = yf + (y-yf)*sy.",
    code: `/* 
   2D Scaling of a Polygon about a Fixed Point 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void main() {
    int gd = DETECT, gm;
    int x1 = 150, y1 = 150;
    int x2 = 250, y2 = 150;
    int x3 = 250, y3 = 250;
    int x4 = 150, y4 = 250;
    
    /* Fixed Point of Scaling is (150, 150) */
    int xf = 150, yf = 150;
    float sx, sy;
    int sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4;
    
    printf("Enter scaling factors sx and sy (float, e.g. 1.5 1.5): ");
    scanf("%f %f", &sx, &sy);
    
    /* Calculate Scaled coordinates */
    sx1 = xf + (x1 - xf) * sx;
    sy1 = yf + (y1 - yf) * sy;
    
    sx2 = xf + (x2 - xf) * sx;
    sy2 = yf + (y2 - yf) * sy;
    
    sx3 = xf + (x3 - xf) * sx;
    sy3 = yf + (y3 - yf) * sy;
    
    sx4 = xf + (x4 - xf) * sx;
    sy4 = yf + (y4 - yf) * sy;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    /* Draw Original square in WHITE */
    setcolor(WHITE);
    rectangle(x1, y1, x3, y3);
    outtextxy(x1 + 10, y1 + 15, "Original");
    
    /* Draw Scaled shape in CYAN */
    setcolor(CYAN);
    line(sx1, sy1, sx2, sy2);
    line(sx2, sy2, sx3, sy3);
    line(sx3, sy3, sx4, sy4);
    line(sx4, sy4, sx1, sy1);
    outtextxy(sx1 + 10, sy1 + 35, "Scaled");
    
    /* Highlight Fixed point */
    putpixel(xf, yf, RED);
    outtextxy(xf - 10, yf - 10, "Fixed Point");
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "sx", label: "Scale Factor Sx", type: "range", min: 0.5, max: 2.0, step: 0.1, val: 1.5 },
      { id: "sy", label: "Scale Factor Sy", type: "range", min: 0.5, max: 2.0, step: 0.1, val: 1.5 }
    ],
    draw: function(ctx, w, h, params) {
      const sx = parseFloat(params.sx);
      const sy = parseFloat(params.sy);
      
      const x1 = 150, y1 = 150;
      const x2 = 250, y2 = 150;
      const x3 = 250, y3 = 250;
      const x4 = 150, y4 = 250;
      const xf = 150, yf = 150; // Fixed Point
      
      // Calculate scaled coords
      const sx1 = xf + (x1 - xf) * sx;
      const sy1 = yf + (y1 - yf) * sy;
      const sx2 = xf + (x2 - xf) * sx;
      const sy2 = yf + (y2 - yf) * sy;
      const sx3 = xf + (x3 - xf) * sx;
      const sy3 = yf + (y3 - yf) * sy;
      const sx4 = xf + (x4 - xf) * sx;
      const sy4 = yf + (y4 - yf) * sy;
      
      // Draw original (dashed grey)
      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(x1, y1, x3 - x1, y3 - y1);
      ctx.fillStyle = "#888888";
      ctx.fillText("Original", x1 + 10, y1 + 20);
      
      // Draw scaled (cyan)
      ctx.strokeStyle = "#00f2fe";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(sx1, sy1); ctx.lineTo(sx2, sy2); ctx.lineTo(sx3, sy3); ctx.lineTo(sx4, sy4); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#00f2fe";
      ctx.fillText("Scaled", sx1 + 10, sy1 + 35);
      
      // Fixed point indicator
      ctx.fillStyle = "#ff0844";
      ctx.beginPath();
      ctx.arc(xf, yf, 4, 0, 2*Math.PI);
      ctx.fill();
      ctx.fillText("Fixed Point", xf - 10, yf - 10);
    }
  },
  {
    id: "shear-reflection-2d",
    title: "4. Shearing and Reflection on 2D Figure",
    fileName: "SHEAR_REF.C",
    desc: "Shearing distorts shape along an axis (X-shear: x'=x+shx*y, Y-shear: y'=y+shy*x). Reflection mirrors coordinates across an axis (Reflect X: x'=x, y'=-y; Reflect Y: x'=-x, y'=y).",
    code: `/* 
   2D Shearing & Reflection of a Rectangle 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void main() {
    int gd = DETECT, gm;
    int x1 = 100, y1 = 100;
    int x2 = 200, y2 = 100;
    int x3 = 200, y3 = 200;
    int x4 = 100, y4 = 200;
    int choice;
    float shx, shy;
    
    printf("1. X-Shear\\n2. Y-Shear\\n3. Reflection (about Y=240 screen axis)\\nEnter choice: ");
    scanf("%d", &choice);
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    /* Draw Original in WHITE */
    setcolor(WHITE);
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    line(x4, y4, x1, y1);
    
    setcolor(CYAN);
    if(choice == 1) {
        shx = 0.5; /* X-Shear factor */
        line(x1 + shx*y1, y1, x2 + shx*y2, y2);
        line(x2 + shx*y2, y2, x3 + shx*y3, y3);
        line(x3 + shx*y3, y3, x4 + shx*y4, y4);
        line(x4 + shx*y4, y4, x1 + shx*y1, y1);
        outtextxy(200, 80, "X-Sheared");
    } else if(choice == 2) {
        shy = 0.5; /* Y-Shear factor */
        line(x1, y1 + shy*x1, x2, y2 + shy*x2);
        line(x2, y2 + shy*x2, x3, y3 + shy*x3);
        line(x3, y3 + shy*x3, x4, y4 + shy*x4);
        line(x4, y4 + shy*x4, x1, y1 + shy*x1);
        outtextxy(250, 200, "Y-Sheared");
    } else if(choice == 3) {
        /* Reflect about horizontal mid-axis (y = 240) */
        int axis_y = 240;
        int ry1 = axis_y + (axis_y - y1);
        int ry2 = axis_y + (axis_y - y2);
        int ry3 = axis_y + (axis_y - y3);
        int ry4 = axis_y + (axis_y - y4);
        
        line(x1, ry1, x2, ry2);
        line(x2, ry2, x3, ry3);
        line(x3, ry3, x4, ry4);
        line(x4, ry4, x1, ry1);
        
        setcolor(RED);
        line(0, axis_y, 640, axis_y); /* Mirror Line */
        outtextxy(10, axis_y - 10, "Reflection Axis (Y=240)");
        setcolor(CYAN);
        outtextxy(x1, ry1 - 15, "Reflected");
    }
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "mode", label: "Select Mode", type: "radio", options: [
        { label: "X-Shearing", val: "xshear" },
        { label: "Y-Shearing", val: "yshear" },
        { label: "Reflection (Y-Axis)", val: "reflect" }
      ], val: "xshear" },
      { id: "factor", label: "Distortion Factor / Value", type: "range", min: -1.0, max: 1.0, step: 0.1, val: 0.5 }
    ],
    draw: function(ctx, w, h, params) {
      const mode = params.mode;
      const factor = parseFloat(params.factor);
      
      const x1 = 150, y1 = 100;
      const x2 = 250, y2 = 100;
      const x3 = 250, y3 = 200;
      const x4 = 150, y4 = 200;
      
      // Draw original (dashed grey)
      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.lineTo(x4, y4); ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "#888888";
      ctx.fillText("Original", x1 + 10, y1 + 20);
      
      ctx.strokeStyle = "#00f2fe";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.fillStyle = "#00f2fe";
      
      if (mode === "xshear") {
        // x' = x + shx * y (anchor to y1)
        const sx1 = x1 + factor * (y1 - y1);
        const sx2 = x2 + factor * (y2 - y1);
        const sx3 = x3 + factor * (y3 - y1);
        const sx4 = x4 + factor * (y4 - y1);
        
        ctx.beginPath();
        ctx.moveTo(sx1, y1); ctx.lineTo(sx2, y2); ctx.lineTo(sx3, y3); ctx.lineTo(sx4, y4); ctx.closePath();
        ctx.stroke();
        ctx.fillText("X-Sheared", sx1 + 10, y1 + 35);
      } else if (mode === "yshear") {
        // y' = y + shy * x (anchor to x1)
        const sy1 = y1 + factor * (x1 - x1);
        const sy2 = y2 + factor * (x2 - x1);
        const sy3 = y3 + factor * (x3 - x1);
        const sy4 = y4 + factor * (x4 - x1);
        
        ctx.beginPath();
        ctx.moveTo(x1, sy1); ctx.lineTo(x2, sy2); ctx.lineTo(x3, sy3); ctx.lineTo(x4, sy4); ctx.closePath();
        ctx.stroke();
        ctx.fillText("Y-Sheared", x1 + 10, sy1 + 35);
      } else if (mode === "reflect") {
        // Reflect about middle Y screen axis: axis_y = 240
        const axis_y = 240;
        const ry1 = axis_y + (axis_y - y1);
        const ry2 = axis_y + (axis_y - y2);
        const ry3 = axis_y + (axis_y - y3);
        const ry4 = axis_y + (axis_y - y4);
        
        // Draw axis
        ctx.strokeStyle = "#ff0844";
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(0, axis_y); ctx.lineTo(w, axis_y);
        ctx.stroke();
        ctx.fillStyle = "#ff0844";
        ctx.fillText("Mirror Line (Y = 240)", 10, axis_y - 8);
        
        // Draw reflected shape
        ctx.strokeStyle = "#00f2fe";
        ctx.setLineDash([]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, ry1); ctx.lineTo(x2, ry2); ctx.lineTo(x3, ry3); ctx.lineTo(x4, ry4); ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "#00f2fe";
        ctx.fillText("Reflected", x1 + 10, ry1 - 15);
      }
    }
  },
  {
    id: "line-bresenham-c",
    title: "5. Bresenham's Line Algorithm",
    fileName: "BRES_LN.C",
    desc: "Bresenham's Line Algorithm is an integer-only scan conversion method. It tracks an accumulator error (Pk) to decide between plotting E (x+1, y) or NE (x+1, y+1).",
    code: `/* 
   Bresenham's Line Drawing Algorithm (0 <= m <= 1)
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>
#include <math.h>

void drawLineBresenham(int x0, int y0, int x1, int y1) {
    int dx = abs(x1 - x0);
    int dy = abs(y1 - y0);
    int x = x0, y = y0;
    
    /* Initial Decision Parameter */
    int p = 2 * dy - dx;
    
    while(x <= x1) {
        putpixel(x, y, CYAN);
        delay(10); /* Small delay to watch BGI plot */
        x++;
        if(p < 0) {
            p = p + 2 * dy;
        } else {
            y++;
            p = p + 2 * dy - 2 * dx;
        }
    }
}

void main() {
    int gd = DETECT, gm;
    int x0 = 100, y0 = 100, x1 = 400, y1 = 300;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    outtextxy(10, 10, "Bresenham Line (100,100) to (400,300)");
    drawLineBresenham(x0, y0, x1, y1);
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "x0", label: "Start X0", type: "range", min: 50, max: 200, val: 100 },
      { id: "y0", label: "Start Y0", type: "range", min: 50, max: 200, val: 100 },
      { id: "x1", label: "End X1", type: "range", min: 250, max: 550, val: 400 },
      { id: "y1", label: "End Y1", type: "range", min: 210, max: 400, val: 300 }
    ],
    draw: function(ctx, w, h, params) {
      const x0 = parseInt(params.x0);
      const y0 = parseInt(params.y0);
      const x1 = parseInt(params.x1);
      const y1 = parseInt(params.y1);
      
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;
      
      let x = x0;
      let y = y0;
      let p = 2 * dy - dx;
      
      ctx.fillStyle = "#a0aec0";
      ctx.font = "10px JetBrains Mono";
      ctx.fillText(`P0 = 2*${dy} - ${dx} = ${p}`, 20, 40);
      
      ctx.fillStyle = "#00f2fe";
      
      const isSlopeLessThanOne = dx >= dy;
      if (isSlopeLessThanOne) {
        while (x !== x1) {
          ctx.fillRect(x - 1, y - 1, 3, 3);
          x += sx;
          if (p < 0) {
            p += 2 * dy;
          } else {
            y += sy;
            p += 2 * dy - 2 * dx;
          }
        }
      } else {
        let p_v = 2 * dx - dy;
        while (y !== y1) {
          ctx.fillRect(x - 1, y - 1, 3, 3);
          y += sy;
          if (p_v < 0) {
            p_v += 2 * dx;
          } else {
            x += sx;
            p_v += 2 * dx - 2 * dy;
          }
        }
      }
      ctx.fillRect(x1 - 1, y1 - 1, 3, 3);
      
      ctx.fillText(`Start (${x0}, ${y0})`, x0 - 20, y0 - 10);
      ctx.fillText(`End (${x1}, ${y1})`, x1 - 20, y1 + 15);
    }
  },
  {
    id: "line-dda-c",
    title: "6. DDA Line Drawing Algorithm",
    fileName: "DDA_LINE.C",
    desc: "Digital Differential Analyzer (DDA) is a floating-point algorithm. It calculates fractional increments x_inc = dx/steps and y_inc = dy/steps and adds them sequentially, using rounding at each step.",
    code: `/* 
   DDA Line Drawing Algorithm 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>
#include <math.h>

void drawLineDDA(int x0, int y0, int x1, int y1) {
    int dx = x1 - x0;
    int dy = y1 - y0;
    int steps, i;
    float xinc, yinc, x, y;
    
    steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy);
    
    xinc = (float)dx / steps;
    yinc = (float)dy / steps;
    
    x = x0;
    y = y0;
    
    for(i = 0; i <= steps; i++) {
        /* Rounding coordinate and plot */
        putpixel((int)(x + 0.5), (int)(y + 0.5), CYAN);
        x = x + xinc;
        y = y + yinc;
    }
}

void main() {
    int gd = DETECT, gm;
    int x0 = 100, y0 = 100, x1 = 400, y1 = 300;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    outtextxy(10, 10, "DDA Line (100,100) to (400,300)");
    drawLineDDA(x0, y0, x1, y1);
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "x0", label: "Start X0", type: "range", min: 50, max: 200, val: 100 },
      { id: "y0", label: "Start Y0", type: "range", min: 50, max: 200, val: 100 },
      { id: "x1", label: "End X1", type: "range", min: 250, max: 550, val: 400 },
      { id: "y1", label: "End Y1", type: "range", min: 210, max: 400, val: 300 }
    ],
    draw: function(ctx, w, h, params) {
      const x0 = parseInt(params.x0);
      const y0 = parseInt(params.y0);
      const x1 = parseInt(params.x1);
      const y1 = parseInt(params.y1);
      
      const dx = x1 - x0;
      const dy = y1 - y0;
      const steps = Math.max(Math.abs(dx), Math.abs(dy));
      
      const xinc = dx / steps;
      const yinc = dy / steps;
      
      let x = x0;
      let y = y0;
      
      ctx.fillStyle = "#a0aec0";
      ctx.font = "10px JetBrains Mono";
      ctx.fillText(`Steps = max(|${dx}|, |${dy}|) = ${steps}`, 20, 40);
      ctx.fillText(`dx/steps = ${xinc.toFixed(3)}, dy/steps = ${yinc.toFixed(3)}`, 20, 52);
      
      ctx.fillStyle = "#00f2fe";
      for (let i = 0; i <= steps; i++) {
        const px = Math.round(x);
        const py = Math.round(y);
        ctx.fillRect(px - 1, py - 1, 3, 3);
        x += xinc;
        y += yinc;
      }
      
      ctx.fillText(`Start (${x0}, ${y0})`, x0 - 20, y0 - 10);
      ctx.fillText(`End (${x1}, ${y1})`, x1 - 20, y1 + 15);
    }
  },
  {
    id: "circle-bresenham-c",
    title: "7. Circle using Bresenham's Algorithm",
    fileName: "BRES_CIR.C",
    desc: "Bresenham's Midpoint Circle Drawing Algorithm. It calculates points for the first octant (0 to 45°) starting at (0, R) and mirrors them into the other 7 octants using 8-way symmetry.",
    code: `/* 
   Bresenham's (Midpoint) Circle Drawing Algorithm
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void draw8Symmetry(int xc, int yc, int x, int y) {
    putpixel(xc + x, yc + y, CYAN);
    putpixel(xc - x, yc + y, CYAN);
    putpixel(xc + x, yc - y, CYAN);
    putpixel(xc - x, yc - y, CYAN);
    putpixel(xc + y, yc + x, CYAN);
    putpixel(xc - y, yc + x, CYAN);
    putpixel(xc + y, yc - x, CYAN);
    putpixel(xc - y, yc - x, CYAN);
}

void drawCircleBresenham(int xc, int yc, int r) {
    int x = 0;
    int y = r;
    int p = 1 - r; /* Initial Decision Parameter */
    
    draw8Symmetry(xc, yc, x, y);
    
    while(x < y) {
        x++;
        if(p < 0) {
            p = p + 2 * x + 1;
        } else {
            y--;
            p = p + 2 * (x - y) + 1;
        }
        draw8Symmetry(xc, yc, x, y);
        delay(15); /* Watch BGI draw symmetry */
    }
}

void main() {
    int gd = DETECT, gm;
    int xc = 320, yc = 240, r = 120;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    outtextxy(10, 10, "Bresenham Circle: Center (320, 240), R=120");
    drawCircleBresenham(xc, yc, r);
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "r", label: "Circle Radius R", type: "range", min: 30, max: 200, val: 120 }
    ],
    draw: function(ctx, w, h, params) {
      const r = parseInt(params.r);
      const xc = 320, yc = 240;
      
      let x = 0;
      let y = r;
      let p = 1 - r;
      
      function plotSymmetric(cx, cy, px, py) {
        ctx.fillRect(cx + px - 1, cy + py - 1, 3, 3);
        ctx.fillRect(cx - px - 1, cy + py - 1, 3, 3);
        ctx.fillRect(cx + px - 1, cy - py - 1, 3, 3);
        ctx.fillRect(cx - px - 1, cy - py - 1, 3, 3);
        ctx.fillRect(cx + py - 1, cy + px - 1, 3, 3);
        ctx.fillRect(cx - py - 1, cy + px - 1, 3, 3);
        ctx.fillRect(cx + py - 1, cy - px - 1, 3, 3);
        ctx.fillRect(cx - py - 1, cy - px - 1, 3, 3);
      }
      
      ctx.fillStyle = "#00f2fe";
      plotSymmetric(xc, yc, x, y);
      
      while (x < y) {
        x++;
        if (p < 0) {
          p += 2 * x + 1;
        } else {
          y--;
          p += 2 * (x - y) + 1;
        }
        plotSymmetric(xc, yc, x, y);
      }
      
      // Center indicator
      ctx.fillStyle = "#ff0844";
      ctx.beginPath(); ctx.arc(xc, yc, 3, 0, 2*Math.PI); ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "10px JetBrains Mono";
      ctx.fillText(`Center (320, 240)`, xc - 40, yc + 15);
      ctx.fillText(`R = ${r}`, xc + r - 30, yc - 10);
    }
  },
  {
    id: "ellipse-midpoint-c",
    title: "8. Ellipse Drawing using Midpoint Algorithm",
    fileName: "ELLIPSE.C",
    desc: "Midpoint Ellipse Algorithm. Divides drawing into Region 1 (slope > -1) and Region 2 (slope <= -1) split at tangent dy/dx = -1. Draws in Quadrant 1 and mirrors to the other three (4-way symmetry).",
    code: `/* 
   Midpoint Ellipse Drawing Algorithm 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void draw4Symmetry(int xc, int yc, int x, int y) {
    putpixel(xc + x, yc + y, CYAN);
    putpixel(xc - x, yc + y, CYAN);
    putpixel(xc + x, yc - y, CYAN);
    putpixel(xc - x, yc - y, CYAN);
}

void drawEllipseMidpoint(int xc, int yc, int rx, int ry) {
    float x = 0;
    float y = ry;
    
    /* Region 1 decision parameter */
    float p1 = ry*ry - rx*rx*ry + 0.25*rx*rx;
    float dx = 2 * ry * ry * x;
    float dy = 2 * rx * rx * y;
    
    draw4Symmetry(xc, yc, x, y);
    
    /* Region 1: Slope > -1 */
    while(dx < dy) {
        x++;
        dx = dx + 2 * ry * ry;
        if(p1 < 0) {
            p1 = p1 + dx + ry * ry;
        } else {
            y--;
            dy = dy - 2 * rx * rx;
            p1 = p1 + dx - dy + ry * ry;
        }
        draw4Symmetry(xc, yc, x, y);
    }
    
    /* Region 2 decision parameter */
    float p2 = ry*ry*(x+0.5)*(x+0.5) + rx*rx*(y-1)*(y-1) - rx*rx*ry*ry;
    
    /* Region 2: Slope <= -1 */
    while(y > 0) {
        y--;
        dy = dy - 2 * rx * rx;
        if(p2 > 0) {
            p2 = p2 + rx * rx - dy;
        } else {
            x++;
            dx = dx + 2 * ry * ry;
            p2 = p2 + rx * rx + dx - dy;
        }
        draw4Symmetry(xc, yc, x, y);
    }
}

void main() {
    int gd = DETECT, gm;
    int xc = 320, yc = 240, rx = 150, ry = 90;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    outtextxy(10, 10, "Midpoint Ellipse: rx=150, ry=90");
    drawEllipseMidpoint(xc, yc, rx, ry);
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "rx", label: "Horizontal Rx", type: "range", min: 40, max: 250, val: 150 },
      { id: "ry", label: "Vertical Ry", type: "range", min: 30, max: 200, val: 90 }
    ],
    draw: function(ctx, w, h, params) {
      const rx = parseInt(params.rx);
      const ry = parseInt(params.ry);
      const xc = 320, yc = 240;
      
      let x = 0;
      let y = ry;
      
      function plot4Symmetry(cx, cy, px, py) {
        ctx.fillRect(cx + px - 1, cy + py - 1, 3, 3);
        ctx.fillRect(cx - px - 1, cy + py - 1, 3, 3);
        ctx.fillRect(cx + px - 1, cy - py - 1, 3, 3);
        ctx.fillRect(cx - px - 1, cy - py - 1, 3, 3);
      }
      
      ctx.fillStyle = "#00f2fe";
      
      // Region 1
      let p1 = ry * ry - rx * rx * ry + 0.25 * rx * rx;
      let dx = 2 * ry * ry * x;
      let dy = 2 * rx * rx * y;
      
      plot4Symmetry(xc, yc, x, y);
      
      while (dx < dy) {
        x++;
        dx += 2 * ry * ry;
        if (p1 < 0) {
          p1 += dx + ry * ry;
        } else {
          y--;
          dy -= 2 * rx * rx;
          p1 += dx - dy + ry * ry;
        }
        plot4Symmetry(xc, yc, x, y);
      }
      
      // Region 2
      let p2 = ry * ry * (x + 0.5) * (x + 0.5) + rx * rx * (y - 1) * (y - 1) - rx * rx * ry * ry;
      while (y > 0) {
        y--;
        dy -= 2 * rx * rx;
        if (p2 > 0) {
          p2 += rx * rx - dy;
        } else {
          x++;
          dx += 2 * ry * ry;
          p2 += rx * rx + dx - dy;
        }
        plot4Symmetry(xc, yc, x, y);
      }
      
      ctx.fillStyle = "#ff0844";
      ctx.beginPath(); ctx.arc(xc, yc, 3, 0, 2*Math.PI); ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "10px JetBrains Mono";
      ctx.fillText(`Center (320, 240)`, xc - 40, yc + 15);
      ctx.fillText(`Rx = ${rx}, Ry = ${ry}`, xc + rx - 50, yc - 15);
    }
  },
  {
    id: "scanline-fill-c",
    title: "9. Polygon Filling using Scan-line Algorithm",
    fileName: "SCANLINE.C",
    desc: "Scan-line Polygon Fill intersects each horizontal scanline with the polygon edges. It sorts these intersections left-to-right (Odd-Even logic) and draws fill lines between alternate pairs.",
    code: `/* 
   Scan-Line Polygon Filling Algorithm 
   Compatible with Turbo C++ / Turbo C 3.0 BGI
*/
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void main() {
    int gd = DETECT, gm;
    
    /* Vertices of the polygon */
    int x[] = {150, 400, 480, 200};
    int y[] = {150, 100, 350, 300};
    int n = 4; /* Number of vertices */
    
    int i, j, k, temp, ymin, ymax, scan_y;
    int inter_x[20], count;
    float slope;
    
    initgraph(&gd, &gm, "C:\\\\TURBOC3\\\\BGI");
    
    /* Draw outline of polygon in WHITE */
    setcolor(WHITE);
    for(i = 0; i < n; i++) {
        line(x[i], y[i], x[(i+1)%n], y[(i+1)%n]);
    }
    
    /* Find Y min and Y max */
    ymin = y[0]; ymax = y[0];
    for(i = 1; i < n; i++) {
        if(y[i] < ymin) ymin = y[i];
        if(y[i] > ymax) ymax = y[i];
    }
    
    /* Loop for every Scanline from ymin to ymax */
    for(scan_y = ymin; scan_y <= ymax; scan_y++) {
        count = 0;
        
        /* Find edge intersections with scan_y */
        for(i = 0; i < n; i++) {
            j = (i + 1) % n;
            
            /* Check if scan_y falls between edge endpoints */
            if((y[i] < scan_y && y[j] >= scan_y) || (y[j] < scan_y && y[i] >= scan_y)) {
                /* Calculate X intersection */
                inter_x[count] = x[i] + (float)(scan_y - y[i]) / (y[j] - y[i]) * (x[j] - x[i]);
                count++;
            }
        }
        
        /* Sort intersections in ascending order (Bubble Sort) */
        for(i = 0; i < count - 1; i++) {
            for(j = 0; j < count - i - 1; j++) {
                if(inter_x[j] > inter_x[j+1]) {
                    temp = inter_x[j];
                    inter_x[j] = inter_x[j+1];
                    inter_x[j+1] = temp;
                }
            }
        }
        
        /* Fill between pairs of intersections in CYAN */
        setcolor(CYAN);
        for(i = 0; i < count; i += 2) {
            line(inter_x[i], scan_y, inter_x[i+1], scan_y);
        }
        delay(5); /* Watch the polygon fill top-to-bottom */
    }
    
    getch();
    closegraph();
}`,
    inputs: [
      { id: "scanY", label: "Animate Scan-Line Y", type: "range", min: 100, max: 350, val: 240 }
    ],
    draw: function(ctx, w, h, params) {
      const currentScanY = parseInt(params.scanY);
      
      const x = [150, 400, 480, 200];
      const y = [150, 100, 350, 300];
      const n = 4;
      
      // Draw scanline cursor
      ctx.strokeStyle = "#ff0844";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(0, currentScanY); ctx.lineTo(w, currentScanY);
      ctx.stroke();
      ctx.fillStyle = "#ff0844";
      ctx.font = "10px JetBrains Mono";
      ctx.fillText(`Current Scan Y = ${currentScanY}`, 10, currentScanY - 5);
      
      // Calculate ymin and ymax
      let ymin = y[0], ymax = y[0];
      for (let i = 1; i < n; i++) {
        if (y[i] < ymin) ymin = y[i];
        if (y[i] > ymax) ymax = y[i];
      }
      
      // Perform Scan-line fill up to currentScanY
      ctx.strokeStyle = "rgba(0, 242, 254, 0.6)";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      
      for (let sy = ymin; sy <= currentScanY; sy++) {
        let interX = [];
        for (let i = 0; i < n; i++) {
          const next = (i + 1) % n;
          if ((y[i] < sy && y[next] >= sy) || (y[next] < sy && y[i] >= sy)) {
            const ix = x[i] + (sy - y[i]) / (y[next] - y[i]) * (x[next] - x[i]);
            interX.push(ix);
          }
        }
        interX.sort((a, b) => a - b);
        for (let i = 0; i < interX.length; i += 2) {
          ctx.beginPath();
          ctx.moveTo(interX[i], sy);
          ctx.lineTo(interX[i+1], sy);
          ctx.stroke();
        }
      }
      
      // Draw polygon outline (white)
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x[0], y[0]);
      for (let i = 1; i < n; i++) {
        ctx.lineTo(x[i], y[i]);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Draw vertices dots
      ctx.fillStyle = "#ffb300";
      for (let i = 0; i < n; i++) {
        ctx.beginPath(); ctx.arc(x[i], y[i], 3, 0, 2*Math.PI); ctx.fill();
      }
    }
  }
];

function initCPrograms() {
  const cprogListNav = document.getElementById('cprograms-list-nav');
  const titleEl = document.getElementById('cprogram-title');
  const descEl = document.getElementById('cprogram-desc');
  const codeBox = document.getElementById('cprogram-code-box');
  const fileNameEl = document.getElementById('editor-file-name');
  
  const subTabButtons = document.querySelectorAll('.sub-tab-btn');
  const subTabContents = document.querySelectorAll('.sub-tab-content');
  const paramsForm = document.getElementById('cprograms-params-form');
  const copyBtn = document.getElementById('btn-copy-code');
  
  let activeProgIdx = 0;
  
  // Render Sidebar program items
  cprogListNav.innerHTML = '';
  cprogramsData.forEach((prog, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = `cprogram-nav-item ${index === 0 ? 'active' : ''}`;
    button.innerHTML = `<span class="prog-num">${index + 1}.</span> ${prog.title.substring(3)}`;
    button.addEventListener('click', () => {
      loadProgram(index);
    });
    li.appendChild(button);
    cprogListNav.appendChild(li);
  });
  
  // Copy to clipboard listener
  copyBtn.addEventListener('click', () => {
    const codeText = cprogramsData[activeProgIdx].code;
    navigator.clipboard.writeText(codeText).then(() => {
      const origText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--success-color)"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        Copied!
      `;
      copyBtn.classList.add('btn-success');
      setTimeout(() => {
        copyBtn.innerHTML = origText;
        copyBtn.classList.remove('btn-success');
      }, 1500);
    });
  });
  
  // Sub-tab togglers (Source Code vs Simulated graphics)
  subTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const subtab = btn.getAttribute('data-subtab');
      
      subTabButtons.forEach(b => b.classList.remove('active'));
      subTabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`subtab-${subtab}`).classList.add('active');
      
      if (subtab === 'tcrun') {
        drawSimulatedCanvas();
      }
    });
  });
  
  // Load specified program index
  function loadProgram(index) {
    activeProgIdx = index;
    
    const prog = cprogramsData[index];
    titleEl.textContent = prog.title;
    descEl.textContent = prog.desc;
    fileNameEl.textContent = prog.fileName;
    codeBox.textContent = prog.code;
    
    // Update active nav item
    const navItems = document.querySelectorAll('.cprogram-nav-item');
    navItems.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('active');
        btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Populate parameters controls panel
    buildParamsPanel(prog);
    
    // Switch to code tab by default
    subTabButtons[0].click();
  }
  
  // Build interactive controls inside parameters sidebar
  function buildParamsPanel(prog) {
    paramsForm.innerHTML = '';
    
    prog.inputs.forEach(inp => {
      if (inp.type === 'range') {
        const div = document.createElement('div');
        div.className = 'param-slider-group';
        div.innerHTML = `
          <label>
            <span>${inp.label}</span>
            <span class="param-val" id="val-${inp.id}">${inp.val}</span>
          </label>
          <input type="range" id="input-${inp.id}" min="${inp.min}" max="${inp.max}" step="${inp.step || 1}" value="${inp.val}">
        `;
        paramsForm.appendChild(div);
        
        const slider = div.querySelector('input');
        slider.addEventListener('input', (e) => {
          document.getElementById(`val-${inp.id}`).textContent = e.target.value;
          drawSimulatedCanvas();
        });
      } else if (inp.type === 'radio') {
        const title = document.createElement('div');
        title.className = 'param-title-label';
        title.textContent = inp.label;
        paramsForm.appendChild(title);
        
        const div = document.createElement('div');
        div.className = 'param-radio-group';
        
        inp.options.forEach((opt, oi) => {
          const label = document.createElement('label');
          label.className = 'param-radio-label';
          label.innerHTML = `
            <input type="radio" name="param-${inp.id}" value="${opt.val}" ${opt.val === inp.val ? 'checked' : ''}>
            ${opt.label}
          `;
          div.appendChild(label);
          
          const radio = label.querySelector('input');
          radio.addEventListener('change', () => {
            drawSimulatedCanvas();
          });
        });
        paramsForm.appendChild(div);
      }
    });
    
    // Add C Program context note
    const note = document.createElement('div');
    note.className = 'cprogram-param-note';
    note.innerHTML = `
      <strong>Turbo C++ Output Guide:</strong> Adjust the sliders above. The canvas on the <strong>Simulated Graphics Output</strong> sub-tab will redraw to simulate running your C code under those exact input parameters.
    `;
    paramsForm.appendChild(note);
  }
  
  // Render shape on BGI Canvas
  function drawSimulatedCanvas() {
    const canvas = document.getElementById('tc-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    // Clear screen (black background)
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);
    
    // Draw outer green/blue grid lines very faintly to look like an old CRT monitor
    ctx.strokeStyle = "rgba(0, 85, 170, 0.1)";
    ctx.lineWidth = 1;
    for (let c = 40; c < w; c += 40) {
      ctx.beginPath(); ctx.moveTo(c, 0); ctx.lineTo(c, h); ctx.stroke();
    }
    for (let r = 40; r < h; r += 40) {
      ctx.beginPath(); ctx.moveTo(0, r); ctx.lineTo(w, r); ctx.stroke();
    }
    
    // Read input parameters dynamically
    const params = {};
    const prog = cprogramsData[activeProgIdx];
    prog.inputs.forEach(inp => {
      if (inp.type === 'range') {
        const inputEl = document.getElementById(`input-${inp.id}`);
        params[inp.id] = inputEl ? inputEl.value : inp.val;
      } else if (inp.type === 'radio') {
        const checkedEl = document.querySelector(`input[name="param-${inp.id}"]:checked`);
        params[inp.id] = checkedEl ? checkedEl.value : inp.val;
      }
    });
    
    // Execute drawing routine
    ctx.save();
    prog.draw(ctx, w, h, params);
    ctx.restore();
  }
  
  // Load initial program
  loadProgram(0);
  
  // Expose function globally so tab resizing or activations can trigger redraw
  window.redrawTCCanvas = drawSimulatedCanvas;
}

// Global pointers matching active course selection
let slidesData = slidesDataCG;
let flashcardsData = flashcardsDataCG;
let activeSubject = 'cg';

// Cyber Security Slides Database
const slidesDataCS = [
  {
    title: "Course Overview & Syllabus Map",
    unit: "Intro",
    content: `
      <h2>Cyber Security & Crime <span class="slide-unit-badge">IMCA605T</span></h2>
      <p>Welcome! This section is structured to prepare you for the IMCA605T Cyber Security and Cyber Crime exam, covering Units I, II, and III in deep academic detail.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Unit-I & II: Crime Definitions & Offenses</h4>
          <ul class="slide-bullet-list">
            <li><strong>Unit-I Concepts:</strong> Cybercrime origins, InfoSec relationship, types of cybercriminals.</li>
            <li><strong>Classifications:</strong> Spoofing, Spamming, Defamation, Time Theft, Salami attacks, Data diddling, Forgery, Web jacking.</li>
            <li><strong>Unit-II Planning:</strong> Attack lifecycle, Reconnaissance, Passive vs. Active attacks.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color: var(--accent-purple);">Unit-III: Mobile Security & Fraud</h4>
          <ul class="slide-bullet-list">
            <li><strong>Hardware trends:</strong> Mobile proliferation, challenges, and BYOD enterprise policies.</li>
            <li><strong>Credit Card Frauds:</strong> CNP, Skimming, Phishing, Keylogging.</li>
            <li><strong>Mobile Hardening:</strong> Windows Mobile Registry keys blockages, CAB policies, security guidelines.</li>
          </ul>
        </div>
      </div>
      
      <p>💡 <em>Choose the tabs above to toggle between detailed slides, digital study flashcards, and live interactive threat simulation visualizers!</em></p>
    `
  },
  {
    title: "Syllabus Unit-I: Definition & Criminals",
    unit: "Unit-I",
    content: `
      <h2>Cybercrime & Information Security <span class="slide-unit-badge">Unit-I</span></h2>
      <p><strong>Cybercrime</strong> is any illegal activity where a computer, network, or digital device is used as a tool, a target, or both.</p>
      
      <div class="info-callout">
        <h4>Origin of the Word:</h4>
        The prefix "cyber" originates from the word <strong>Cybernetics</strong>, coined by mathematician Norbert Wiener in 1948 to describe the study of control and communication systems in machines and living organisms. Today, "cyber" denotes anything relating to computers, information technology, and virtual space.
      </div>

      <div class="slide-grid-2">
        <div>
          <h4>Who are Cybercriminals?</h4>
          <ul class="slide-bullet-list" style="margin-left:1rem; font-size:0.88rem;">
            <li><strong>Hackers:</strong> Individuals who explore computer code. Can be White Hat (ethical), Black Hat (crackers/malicious), or Grey Hat (unauthorized but not malicious).</li>
            <li><strong>Script Kiddies:</strong> Unskilled amateurs who launch attacks using pre-made tools developed by others.</li>
            <li><strong>Insider Threats:</strong> Disgruntled employees or contractors inside an organization. They pose the highest security risk because they already have authorized access keys.</li>
            <li><strong>Cyber Terrorists:</strong> Ideologically motivated attackers targeting critical infrastructure (power grids, government systems) to spread fear.</li>
          </ul>
        </div>
        <div>
          <h4>Cybercrime vs. InfoSec</h4>
          <p style="font-size:0.88rem; line-height:1.4;">
            While <strong>Cybercrime</strong> represents the offense, <strong>Information Security (InfoSec)</strong> represents the defense. InfoSec aims to safeguard the Confidentiality, Integrity, and Availability (CIA Triad) of data from cybercriminal intrusion.
          </p>
        </div>
      </div>
    `
  },
  {
    title: "Syllabus Unit-I: Classifications Part 1",
    unit: "Unit-I",
    content: `
      <h2>Classifications of Cybercrimes (1) <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Exams frequently require definitions of specific cybercrime classifications. Here are the core classifications of Unit-I.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>1. E-Mail Spoofing</h4>
          <p style="font-size:0.85rem; margin-bottom: 0.5rem;">
            Altering email headers so that the message appears to originate from a legitimate, trusted sender (e.g. your bank). 
          </p>
          <em>Technique:</em> SMTP (Simple Mail Transfer Protocol) historically lacks sender authentication, allowing spoofers to falsify the "From:" field. Often used in Phishing campaigns.
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">2. Spamming</h4>
          <p style="font-size:0.85rem; margin-bottom: 0.5rem;">
            The sending of bulk, unsolicited commercial messages (spams) to millions of email addresses.
          </p>
          <em>Impact:</em> Clogs mail servers, consumes network bandwidth, and often serves as a delivery vehicle for malware or scam links.
        </div>
      </div>

      <div class="info-callout" style="border-left-color: var(--success-color); margin-top: 1rem;">
        <h4>3. Cyber Defamation</h4>
        <p style="font-size:0.88rem; margin-bottom:0;">
          The act of publishing false statements about an individual or organization on the internet (via websites, forums, social media) with the malicious intent of damaging their reputation or business standing.
        </p>
      </div>
    `
  },
  {
    title: "Syllabus Unit-I: Classifications Part 2",
    unit: "Unit-I",
    content: `
      <h2>Classifications of Cybercrimes (2) <span class="slide-unit-badge">Unit-I</span></h2>
      <p>Further classifications involving data manipulation, financial fraud, and web hijacking.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>4. Internet Time Theft</h4>
          <p style="font-size:0.85rem; margin-bottom: 0;">
            Unauthorized use of someone else's internet connection/hours. In dial-up or metered broadband eras, hackers stole access credentials to bypass service billing, resulting in financial loss for the victim.
          </p>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">5. Salami Attack / Salami Technique</h4>
          <p style="font-size:0.85rem; margin-bottom: 0;">
            A banking attack where a hacker shaves off tiny fractions of money (like $0.005) from thousands of customer interest payouts. The shaved amounts are routed into a hacker's vault. Because the loss to individual accounts is unnoticeable and below standard rounding thresholds, the crime goes undetected.
          </p>
        </div>
      </div>

      <div class="slide-grid-2">
        <div class="info-callout" style="border-left-color: var(--warning-color);">
          <h4 style="color:var(--warning-color);">6. Data Diddling</h4>
          <p style="font-size:0.85rem; margin-bottom: 0;">
            Altering or manipulating data *before* or *during* its entry into a computer system (e.g. changing retail prices in database forms or adjusting transaction sums before posting). The data is altered at the source, making the transaction appear valid on paper.
          </p>
        </div>
        <div class="info-callout" style="border-left-color: var(--danger-color);">
          <h4 style="color:var(--danger-color);">7. Web Jacking & Forgery</h4>
          <p style="font-size:0.85rem; margin-bottom: 0;">
            * **Web Jacking:** Hijacking website ownership or DNS records, redirecting visitors to a cloned malicious mirror (phishing clone).
            <br>* **Forgery:** Creating fake digital certificates, signatures, or documents to commit identity theft or fraud.
          </p>
        </div>
      </div>
    `
  },
  {
    title: "Syllabus Unit-II: Cyber Offenses Planning",
    unit: "Unit-II",
    content: `
      <h2>Cyber Offenses: Planning Attacks <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Cybercriminals rarely strike immediately. They execute structured preparation stages before launching an attack.</p>
      
      <div class="math-box">
        <p><strong>Categories of Cybercrime Targets:</strong></p>
        1. **Against Individuals:** Defamation, stalking, identity theft, credit card fraud.
        <br>2. **Against Property:** IP theft, hacking online databases, ransomware encryption.
        <br>3. **Against Government:** Cyberterrorism, critical grid attacks, espionage.
      </div>

      <div class="info-callout">
        <h4>The Three Main Steps of Attack Planning:</h4>
        <ul class="slide-bullet-list">
          <li><strong>1. Reconnaissance (Information Gathering):</strong> Finding targets, IP addresses, open ports, and operating system vulnerabilities.
            <br>• *Passive Recon:* Snooping indirectly without interacting with targets (e.g. searching public WHOIS registers, scanning DNS).
            <br>• *Active Recon:* Interacting directly to identify vulnerabilities (e.g. port scanning, ping sweeps).
          </li>
          <li><strong>2. Passive Attacks:</strong> Eavesdropping on communications to capture user data (e.g. packet sniffing, traffic analysis). No system changes occur.
          </li>
          <li><strong>3. Active Attacks:</strong> Modifying system files, introducing malware, or flooding resources (e.g. SQL Injection, Denial of Service, Phishing page redirections).
          </li>
        </ul>
      </div>
    `
  },
  {
    title: "Syllabus Unit-II: Vulnerability Zones",
    unit: "Unit-II",
    content: `
      <h2>Cybercafes & Cloud Computing <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Exam questions often cover the security implications of shared public spaces and cloud environments.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Cybercafe and Cybercrimes</h4>
          <p style="font-size:0.88rem; margin-bottom: 0.5rem;">
            Cybercafes are high-risk zones due to public sharing and lack of individual system monitoring:
          </p>
          <ul class="slide-bullet-list" style="margin-left:0.5rem; font-size:0.82rem; gap:0.25rem;">
            <li><strong>Hardware Keyloggers:</strong> Tiny USB connectors plugged between the keyboard and PC that record all keystrokes (passwords).</li>
            <li><strong>Cookie Stealing:</strong> Shared sessions allow hackers to scrape login cookies from browsers.</li>
            <li><strong>Untrusted Wi-Fi:</strong> Cafes often run unencrypted routers where passive sniffing is easy.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">Cybercrime and Cloud Computing</h4>
          <p style="font-size:0.88rem; margin-bottom: 0.5rem;">
            Cloud architectures aggregate massive data stores, attracting hackers:
          </p>
          <ul class="slide-bullet-list" style="margin-left:0.5rem; font-size:0.82rem; gap:0.25rem;">
            <li><strong>Data Breaches:</strong> Misconfigured cloud buckets (AWS S3) expose private records to the public.</li>
            <li><strong>API Hijacking:</strong> Vulnerable web interfaces allow remote exploit triggers.</li>
            <li><strong>Hypervisor Attacks:</strong> Exploiting cloud virtualization to escape sandbox isolation.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Syllabus Unit-III: Mobile Proliferation",
    unit: "Unit-III",
    content: `
      <h2>Mobile & Wireless Computing Security <span class="slide-unit-badge">Unit-III</span></h2>
      <p>Smartphones and wireless tablets have proliferated globally, creating massive security blind spots for corporations.</p>
      
      <div class="info-callout">
        <h4>Key Mobile Security Proliferation Trends:</h4>
        <ul class="slide-bullet-list" style="gap:0.5rem;">
          <li><strong>BYOD (Bring Your Own Device) Policies:</strong> Companies allow employees to access corporate networks from personal devices, blending insecure personal apps with sensitive corporate data.</li>
          <li><strong>Constant Wireless Access:</strong> Public Wi-Fi connectivity, Bluetooth discoverability, and cellular roaming bypass corporate firewalls.</li>
          <li><strong>Insecure Storage:</strong> Mobile apps cache data locally without encryption, exposing tokens if the hardware is lost or stolen.</li>
        </ul>
      </div>

      <div class="math-box">
        <p><strong>Common Mobile Attack Vectors:</strong></p>
        * **Skimming:** Reading data from RFID cards or phone NFC signals.
        <br>* **Fake Apps:** Malicious clones on store catalogs masquerading as utilities.
        <br>* **OS Jailbreaking:** Users rooting their operating systems, disabling key built-in sandbox security walls.
      </div>
    `
  },
  {
    title: "Syllabus Unit-III: Credit Card Fraud",
    unit: "Unit-III",
    content: `
      <h2>Credit Card Frauds in Mobile Era <span class="slide-unit-badge">Unit-III</span></h2>
      <p>Credit card theft has evolved from physical card theft to sophisticated digital harvesting techniques.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Types of Credit Card Fraud:</h4>
          <ul class="slide-bullet-list" style="margin-left:0.5rem; font-size:0.82rem; gap:0.25rem;">
            <li><strong>Card-Not-Present (CNP) Fraud:</strong> Transactions where the physical card isn't required (online/mobile checkouts). Hackers need only card number, expiry, and CVV.</li>
            <li><strong>RFID Skimming:</strong> Hackers use wireless readers to steal RFID details from contactless cards placed in pockets or purses.</li>
            <li><strong>Page Hijacking:</strong> Redirecting checkout portals to fake credential harvest boxes.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">Credit Card Theft Techniques:</h4>
          <ul class="slide-bullet-list" style="margin-left:0.5rem; font-size:0.82rem; gap:0.25rem;">
            <li><strong>Phishing/Vishing:</strong> Scams tricking victims into revealing card details via fake emails or phone calls.</li>
            <li><strong>Keyloggers:</strong> Malware tracking screen taps or keystrokes to record credit card numbers.</li>
            <li><strong>Bin Attacks:</strong> Programmatic brute-forcing of Card Verification Value (CVV) fields.</li>
          </ul>
        </div>
      </div>
      
      <div class="info-callout" style="border-left-color:var(--success-color); margin-top:1rem;">
        <h4>Mitigations:</h4>
        Enforce Multi-Factor Authentication (MFA), virtual single-use cards, end-to-end tokenization, and dynamic CVVs.
      </div>
    `
  },
  {
    title: "Syllabus Unit-III: Registry Hardening",
    unit: "Unit-III",
    content: `
      <h2>Registry Hardening & Mobile Policies <span class="slide-unit-badge">Unit-III</span></h2>
      <p>Securing mobile hardware requires hardening configuration settings. Historically, Windows Mobile devices are hardened by modifying the system registry database.</p>
      
      <div class="math-box">
        <p><strong>Crucial Registry Settings (Exam Memorization):</strong></p>
        1. **Disable Bluetooth Discoverability:** Stops scanning/connection attacks.
        <span class="code-line">Key: HKLM\\Comm\\Conn\\BT</span>
        <span class="code-line">Value: Discoverable = 0</span>
        2. **Enforce Device Lock Passwords:**
        <span class="code-line">Key: HKLM\\Security\\Policies</span>
        <span class="code-line">Value: PasswordRequired = 1</span>
        3. **Block Unsigned CAB installations (Prevent malware packages):**
        <span class="code-line">Key: HKLM\\Security\\Policies</span>
        <span class="code-line">Value: BlockUnsignedCAB = 1</span>
      </div>

      <div class="info-callout" style="border-left-color:var(--success-color);">
        <h4>Organizational Guidelines for Laptops & Mobile Security:</h4>
        • **MDM (Mobile Device Management):** Enterprise systems to remotely configure password parameters, track hardware, and wipe memory blocks.
        <br>• **Containerization:** Splitting device storage into encrypted workspace blocks (managed by IT) and personal blocks.
        <br>• **USB Blocker policies:** Restricting USB debug keys to prevent juice jacking.
      </div>
    `
  }
];

// Cyber Security Flashcards Database
const flashcardsDataCS = [
  {
    category: "Unit-I: Cybercrime Basics",
    question: "Explain the origin of the word <strong>'Cyber'</strong>.",
    answer: "The prefix 'cyber' comes from Wiener's 1948 term <strong>'Cybernetics'</strong>, which described automated communication and control systems. Today, 'cyber' is used to represent anything connected to computers, networks, or digital space."
  },
  {
    category: "Unit-I: Criminal Personas",
    question: "Differentiate between a <strong>Script Kiddie</strong> and an <strong>Insider Threat</strong>.",
    answer: "<ul><li><strong>Script Kiddie:</strong> An amateur attacker who uses pre-written hacking scripts developed by others, lacking deep coding knowledge.</li><li><strong>Insider Threat:</strong> An employee, former employee, or contractor who has authorized system access. They pose a higher risk because they know system architectures and bypass outer firewalls easily.</li></ul>"
  },
  {
    category: "Unit-I: Classifications",
    question: "Define the <strong>Salami Technique</strong> / Salami Attack.",
    answer: "A financial attack where a perpetrator shaves off tiny fractions of money (like $0.005) from thousands of bank transactions. Because the individual shaved sums are too small to notice or alert account holders, the cumulative profit aggregates silently in the attacker's vault without triggering audit flags."
  },
  {
    category: "Unit-I: Classifications",
    question: "What is the difference between <strong>Data Diddling</strong> and <strong>Web Jacking</strong>?",
    answer: "<ul><li><strong>Data Diddling:</strong> Altering source data *before* or *during* entry into the computer system (e.g. typing a lower product price into a database input form).</li><li><strong>Web Jacking:</strong> Hijacking website servers or DNS parameters to redirect users to a fraudulent clone page (phishing site).</li></ul>"
  },
  {
    category: "Unit-I: Classifications",
    question: "Explain <strong>Internet Time Theft</strong>.",
    answer: "Unauthorized use of someone else's internet connection or paid hours. Historically common in dial-up and metered connection eras, hackers stole access credentials to browse the web at the victim's expense."
  },
  {
    category: "Unit-II: Cyber Offenses",
    question: "Classify cybercrimes based on targets.",
    answer: "Cybercrimes are classified into three target categories:<ul><li><strong>1. Against Individuals:</strong> Cyberstalking, harassment, identity theft, credit card frauds.</li><li><strong>2. Against Property:</strong> Database intrusion, IP piracy, ransomware, site hacking.</li><li><strong>3. Against Government:</strong> Cyberterrorism, critical infrastructure attacks, state espionage.</li></ul>"
  },
  {
    category: "Unit-II: Attack Planning",
    question: "What are **Passive Reconnaissance** and **Active Reconnaissance**?",
    answer: "Reconnaissance is the initial data gathering phase:<ul><li><strong>Passive Recon:</strong> Scanning the target without direct interaction (e.g. searching WHOIS directories, DNS records, public search engines).</li><li><strong>Active Recon:</strong> Interacting directly with the target network to find holes (e.g. port scanning, ping sweeps, banner grabbing).</li></ul>"
  },
  {
    category: "Unit-II: Attack Planning",
    question: "Differentiate between **Passive Attacks** and **Active Attacks**.",
    answer: "<ul><li><strong>Passive Attack:</strong> Attacker eavesdrops to capture traffic data without changing system states (e.g. packet sniffing, traffic analysis). CIA impact: Loss of Confidentiality.</li><li><strong>Active Attack:</strong> Attacker interacts to modify files, alter traffic, or disrupt services (e.g. SQL Injection, DoS, malware injection). CIA impact: Loss of Integrity and Availability.</li></ul>"
  },
  {
    category: "Unit-II: Attack Planning",
    question: "Why are **Cybercafes** hotbeds for cybercrime?",
    answer: "Cybercafes have shared systems that lack access monitoring and contain vulnerabilities:<ul><li>Hardware keyloggers can be plugged behind keyboards to capture inputs.</li><li>Shared browser sessions expose cookies and access keys to subsequent users.</li><li>Public unencrypted Wi-Fi allows easy passive sniffing of user sessions.</li></ul>"
  },
  {
    category: "Unit-III: Mobile Security",
    question: "Explain **RFID Skimming** in credit card fraud.",
    answer: "RFID Skimming is a wireless theft technique where an attacker uses an RFID/NFC reader near a victim to scan and clone the card numbers and details from contactless credit cards or mobile payment chips without physical contact."
  },
  {
    category: "Unit-III: Mobile Security",
    question: "Define **CNP Fraud**.",
    answer: "**Card-Not-Present (CNP) Fraud** occurs during online, telephone, or mobile checkout transactions where the physical card does not need to be swiped. Attackers commit CNP fraud using card metadata (card number, expiry, CVV) harvested via phishing, databases, or keyloggers."
  },
  {
    category: "Unit-III: Mobile Security",
    question: "What is **BYOD** and what security challenges does it present?",
    answer: "**Bring Your Own Device (BYOD)** is a policy allowing employees to use personal devices for work. Challenges: unmanaged personal apps can leak corporate data, lack of company encryption policies on personal hardware, and the inability to wipe devices without deleting personal photos/records."
  },
  {
    category: "Unit-III: Registry settings",
    question: "Name 3 Windows Mobile Registry settings for device hardening.",
    answer: "<ul><li><strong>Disable Bluetooth Discoverability:</strong> Set HKLM\\Comm\\Conn\\BT: <code>Discoverable = 0</code></li><li><strong>Enforce Password Lock:</strong> Set HKLM\\Security\\Policies: <code>PasswordRequired = 1</code></li><li><strong>Block Unsigned CAB installs:</strong> Set HKLM\\Security\\Policies: <code>BlockUnsignedCAB = 1</code></li></ul>"
  },
  {
    category: "Unit-III: Laptop & Mobile Policies",
    question: "Explain the role of **MDM (Mobile Device Management)** systems.",
    answer: "MDM is an enterprise administration system that enforces compliance policies on mobile hardware (e.g. requiring device passwords, tracking physical device coordinates, encrypting containerized storage, and enabling remote wipe commands if a laptop/phone is lost)."
  }
];

// ==========================================
// CYBER SECURITY THREAT SIMULATORS LOGIC
// ==========================================
let csSimInterval = null;
let csSimState = {
  activeThreat: 'salami-attack',
  isRunning: false,
  auditLogs: []
};

// Main Run Switcher
function initCsThreatSimulators() {
  const threatSelect = document.getElementById('threat-select');
  const playBtn = document.getElementById('threat-btn-play');
  const resetBtn = document.getElementById('threat-btn-reset');
  const auditLogEl = document.getElementById('threat-audit-log');
  
  // Select panel togglers
  threatSelect.addEventListener('change', () => {
    const active = threatSelect.value;
    csSimState.activeThreat = active;
    
    // Title & subtitle mapping
    const titleMap = {
      'salami-attack': 'Salami Attack Simulator',
      'packet-sniffer': 'Passive Packet Sniffer (Wi-Fi router)',
      'mobile-registry': 'Mobile Device Registry hardener'
    };
    document.getElementById('threat-title').textContent = titleMap[active];
    document.getElementById('threat-subtitle').textContent = 'Awaiting Simulation...';
    
    // Toggle Inputs
    document.querySelectorAll('.threat-inputs-panel').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.threat-screen-view').forEach(el => el.classList.add('hidden'));
    
    if (active === 'salami-attack') {
      document.getElementById('threat-inputs-salami').classList.remove('hidden');
      document.getElementById('threat-render-salami').classList.remove('hidden');
    } else if (active === 'packet-sniffer') {
      document.getElementById('threat-inputs-sniffer').classList.remove('hidden');
      document.getElementById('threat-render-sniffer').classList.remove('hidden');
    } else if (active === 'mobile-registry') {
      document.getElementById('threat-inputs-registry').classList.remove('hidden');
      document.getElementById('threat-render-registry').classList.remove('hidden');
      updateRegistryDashboard(); // Draw scanner status
    }
    
    resetCsSimulators();
  });
  
  // Simulation play triggers
  playBtn.addEventListener('click', () => {
    if (csSimState.isRunning) {
      pauseCsSimulation();
    } else {
      runCsSimulation();
    }
  });
  
  resetBtn.addEventListener('click', resetCsSimulators);
  
  // Setup Registry triggers
  document.querySelectorAll('#threat-inputs-registry input').forEach(inp => {
    inp.addEventListener('change', updateRegistryDashboard);
  });
}

function runCsSimulation() {
  csSimState.isRunning = true;
  document.getElementById('threat-btn-play').textContent = 'Pause Simulation';
  
  const threat = csSimState.activeThreat;
  if (threat === 'salami-attack') {
    runSalamiSimulation();
  } else if (threat === 'packet-sniffer') {
    runSnifferSimulation();
  } else if (threat === 'mobile-registry') {
    runRegistryScanSimulation();
  }
}

function pauseCsSimulation() {
  csSimState.isRunning = false;
  document.getElementById('threat-btn-play').textContent = 'Run Simulation';
  clearInterval(csSimInterval);
}

function resetCsSimulators() {
  pauseCsSimulation();
  document.getElementById('threat-audit-log').textContent = 'Awaiting simulation start...';
  document.getElementById('salami-ledger-body').innerHTML = '';
  
  // Reset sniffer packet animation
  const dot = document.getElementById('sniff-packet-dot');
  if (dot) {
    dot.classList.add('hidden');
    dot.setAttribute('cx', '80');
    dot.setAttribute('cy', '110');
  }
  document.getElementById('sniffer-log-screen').innerHTML = '[System Ready] Click "Run Simulation" to capture packets.';
  
  if (csSimState.activeThreat === 'mobile-registry') {
    updateRegistryDashboard();
  }
}

// 1. Salami Technique Simulation
function runSalamiSimulation() {
  const ledger = document.getElementById('salami-ledger-body');
  const shave = parseFloat(document.getElementById('salami-shave').value);
  const totalTx = parseInt(document.getElementById('salami-accounts').value);
  const logEl = document.getElementById('threat-audit-log');
  
  ledger.innerHTML = '';
  let count = 0;
  let totalHackerProfit = 0;
  
  document.getElementById('threat-subtitle').textContent = `Processing Interest Payouts (0/${totalTx})...`;
  
  csSimInterval = setInterval(() => {
    if (count < totalTx) {
      count += 50; // increment in blocks for animation speed
      const accId = 1000 + Math.floor(count);
      
      // Calculate shaved sums
      const baseInterest = 10 + Math.random() * 5; // e.g. 12.3557
      const roundedInterest = Math.floor(baseInterest * 100) / 100; // e.g. 12.35 (banking truncation)
      const residual = baseInterest - roundedInterest; // e.g. 0.0057
      
      const actualShaved = shave;
      totalHackerProfit += actualShaved * 50;
      
      // Append row to ledger (show first few entries)
      if (ledger.children.length < 8) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>#${accId}</td>
          <td>$${baseInterest.toFixed(4)}</td>
          <td>$${roundedInterest.toFixed(2)}</td>
          <td style="color:var(--danger-color); font-weight:bold;">$${actualShaved.toFixed(3)}</td>
          <td style="color:var(--success-color);">Processed</td>
        `;
        ledger.appendChild(tr);
      }
      
      document.getElementById('threat-subtitle').textContent = `Processing Transactions (${count}/${totalTx})...`;
      logEl.innerHTML = `
        <strong>Salami technique audit tracking:</strong>
        <br>Processed accounts: ${count}
        <br>Shaved sum per Account transaction: $${shave.toFixed(3)}
        <br>Accumulated Hacker Vault Balance: <span style="color:var(--primary-color); font-weight:bold;">$${totalHackerProfit.toFixed(3)}</span>
      `;
    } else {
      pauseCsSimulation();
      document.getElementById('threat-subtitle').textContent = `Completed processing ${totalTx} transactions.`;
      logEl.innerHTML += `
        <br><br><span class="status-vuln">⚠️ SECURITY ALERT:</span> A Salami Attack gathered <strong>$${totalHackerProfit.toFixed(2)}</strong> from ${totalTx} payouts. Mismatch went undetected because individual balances were only truncated at $${shave.toFixed(3)} boundaries.
      `;
    }
  }, 100);
}

// 2. Packet Sniffer Simulation
function runSnifferSimulation() {
  const dot = document.getElementById('sniff-packet-dot');
  const isEncrypted = document.getElementById('sniffer-encrypt').checked;
  const consoleEl = document.getElementById('sniffer-log-screen');
  const logEl = document.getElementById('threat-audit-log');
  
  dot.classList.remove('hidden');
  dot.setAttribute('cx', '80');
  dot.setAttribute('cy', '110');
  
  let t = 0;
  consoleEl.innerHTML = `[CONNECTION] Resolving secure router tunnel gateway...<br>[ROUTING] Emitting packet stream...`;
  
  csSimInterval = setInterval(() => {
    t += 0.05;
    if (t <= 1.0) {
      // Step 1: Move user to router: x from 80 to 250
      const cx = 80 + (250 - 80) * t;
      dot.setAttribute('cx', cx);
    } else if (t <= 2.0) {
      // Step 2: Branch router to server: x from 250 to 410
      const t2 = t - 1.0;
      const cx = 250 + (410 - 250) * t2;
      dot.setAttribute('cx', cx);
      
      if (t2 < 0.1) {
        consoleEl.innerHTML += `<br>[ROUTING] Passing router. Attacker sniffing port active...`;
      }
    } else {
      // Completed routing
      dot.classList.add('hidden');
      clearInterval(csSimInterval);
      
      if (!isEncrypted) {
        consoleEl.innerHTML += `
          <br><span style="color:var(--danger-color);">[SNIFF] CRITICAL: Captured unencrypted payload!</span>
          <br>  -> DATA: { card_no: "4321 0987 6543 2100", exp: "12/28", cvv: "901" }
          <br>  -> user: "mihir_aditya"
        `;
        logEl.innerHTML = `
          <span class="status-vuln">❌ Sniffer Attack Successful:</span> Capturing raw text payload.
          <br><strong>Root Cause:</strong> HTTP unencrypted session. An eavesdropper (Passive Attack) has harvested complete credit card numbers and passwords!
        `;
      } else {
        consoleEl.innerHTML += `
          <br><span style="color:var(--success-color);">[SNIFF] SECURE: Captured TLS packet.</span>
          <br>  -> Payload: "9d8e7c10b2a3f0ef98cd01235b88abcf..." (Ciphertext)
        `;
        logEl.innerHTML = `
          <span class="status-safe">✅ Secure Session (TLS active):</span> Packet intercepted.
          <br><strong>Security Mitigation:</strong> Sniffer captured packet, but TLS (HTTPS) encryption prevented reading credentials.
        `;
      }
      csSimState.isRunning = false;
      document.getElementById('threat-btn-play').textContent = 'Run Simulation';
    }
  }, 50);
}

// 3. Mobile Registry Hardening Rating
function updateRegistryDashboard() {
  const btHard = document.getElementById('reg-bluetooth').checked;
  const passHard = document.getElementById('reg-passwd').checked;
  const cabHard = document.getElementById('reg-cab').checked;
  
  const vulnList = document.getElementById('reg-vuln-container');
  const scoreVal = document.getElementById('reg-security-score');
  const scoreBar = document.getElementById('reg-score-bar');
  
  vulnList.innerHTML = '';
  let score = 10;
  
  // Hardening check 1: Bluetooth
  if (btHard) {
    score += 30;
    vulnList.innerHTML += `
      <div class="registry-vuln-item">
        <span class="registry-vuln-title">Bluetooth Discoverability (BT: Discoverable=0)</span>
        <span class="registry-vuln-status status-safe">SECURED</span>
      </div>
    `;
  } else {
    vulnList.innerHTML += `
      <div class="registry-vuln-item" style="border-color:rgba(255,8,68,0.25);">
        <span class="registry-vuln-title">Bluetooth discoverable is active (BT: Discoverable=1)</span>
        <span class="registry-vuln-status status-vuln">VULNERABLE (Bluejacking threat)</span>
      </div>
    `;
  }
  
  // Hardening check 2: Passwords
  if (passHard) {
    score += 30;
    vulnList.innerHTML += `
      <div class="registry-vuln-item">
        <span class="registry-vuln-title">Device Lock Authentication (Policies: PasswordRequired=1)</span>
        <span class="registry-vuln-status status-safe">SECURED</span>
      </div>
    `;
  } else {
    vulnList.innerHTML += `
      <div class="registry-vuln-item" style="border-color:rgba(255,8,68,0.25);">
        <span class="registry-vuln-title">No local screen password forced (Policies: PasswordRequired=0)</span>
        <span class="registry-vuln-status status-vuln">VULNERABLE (Physical compromise)</span>
      </div>
    `;
  }
  
  // Hardening check 3: Signed CAB
  if (cabHard) {
    score += 30;
    vulnList.innerHTML += `
      <div class="registry-vuln-item">
        <span class="registry-vuln-title">CAB Installation policy (Policies: BlockUnsignedCAB=1)</span>
        <span class="registry-vuln-status status-safe">SECURED</span>
      </div>
    `;
  } else {
    vulnList.innerHTML += `
      <div class="registry-vuln-item" style="border-color:rgba(255,8,68,0.25);">
        <span class="registry-vuln-title">Unsigned CAB installation allowed (Policies: BlockUnsignedCAB=0)</span>
        <span class="registry-vuln-status status-vuln">VULNERABLE (Malware execution risk)</span>
      </div>
    `;
  }
  
  // Update gauge UI
  scoreVal.textContent = `${score}% ${score === 100 ? '(Secured)' : score >= 70 ? '(Medium Risk)' : '(Vulnerable)'}`;
  if (score === 100) {
    scoreVal.style.color = 'var(--success-color)';
    scoreBar.style.background = 'var(--success-gradient)';
  } else if (score >= 70) {
    scoreVal.style.color = 'var(--warning-color)';
    scoreBar.style.background = 'var(--warning-color)';
  } else {
    scoreVal.style.color = 'var(--danger-color)';
    scoreBar.style.background = 'var(--danger-gradient)';
  }
  scoreBar.style.width = `${score}%`;
}

function runRegistryScanSimulation() {
  const audit = document.getElementById('threat-audit-log');
  audit.innerHTML = `[SCAN] Checking device configuration registry keys...`;
  
  setTimeout(() => {
    updateRegistryDashboard();
    const btHard = document.getElementById('reg-bluetooth').checked;
    const passHard = document.getElementById('reg-passwd').checked;
    const cabHard = document.getElementById('reg-cab').checked;
    
    if (btHard && passHard && cabHard) {
      audit.innerHTML = `<span class="status-safe">✅ DEVICE SCAN SECURED:</span> Registry database matches security policies. Device is hardened against wireless sniffing, physical theft bypasses, and unsigned malware cabinet installation.`;
    } else {
      audit.innerHTML = `<span class="status-vuln">⚠️ WARNING: Registry vulnerabilities discovered!</span> Check the dashboard list above. Toggle registry switches to set values to secure parameters (Discoverable=0, PasswordRequired=1, BlockUnsignedCAB=1) to harden the platform.`;
    }
    
    csSimState.isRunning = false;
    document.getElementById('threat-btn-play').textContent = 'Run Simulation';
  }, 800);
}

// ==========================================
// SUBJECT SWITCHER CONTROLLER
// ==========================================
function initSubjectSwitcher() {
  const subjectSelect = document.getElementById('subject-select');
  const cprogramsNavBtn = document.getElementById('nav-cprograms');
  
  subjectSelect.addEventListener('change', (e) => {
    activeSubject = e.target.value;
    
    // Toggle slidesData pointer
    if (activeSubject === 'cg') {
      slidesData = slidesDataCG;
      flashcardsData = flashcardsDataCG;
      
      // Show C Programs Tab
      cprogramsNavBtn.classList.remove('hidden');
      
      // Visualizer container toggler
      document.getElementById('cg-visualizer-container').classList.remove('hidden');
      document.getElementById('cs-visualizer-container').classList.add('hidden');
    } else if (activeSubject === 'cs') {
      slidesData = slidesDataCS;
      flashcardsData = flashcardsDataCS;
      
      // Hide C Programs Tab (not applicable to Cyber Security)
      cprogramsNavBtn.classList.add('hidden');
      
      // Switch active tab if user was on C Programs
      const activeNavTab = document.querySelector('.nav-btn.active');
      if (activeNavTab && activeNavTab.getAttribute('data-tab') === 'cprograms') {
        document.getElementById('nav-slides').click();
      }
      
      // Visualizer container toggler
      document.getElementById('cg-visualizer-container').classList.add('hidden');
      document.getElementById('cs-visualizer-container').classList.remove('hidden');
    }
    
    // Refresh slideshow list and load first slide
    initSlideshow();
    
    // Refresh flashcards progress and index
    activeCardIdx = 0;
    initFlashcards();
    
    // Refresh study guide contents
    if (window.refreshStudyGuide) {
      window.refreshStudyGuide();
    }
    
    // Trigger resize for layout rendering yokes
    window.dispatchEvent(new Event('resize'));
  });
}

const studyGuideDataCG = [
  {
    title: "1. Intro & Basic Elements",
    content: `
      <h2>Computer Graphics Basic Elements</h2>
      <p>Computer Graphics is the technology of creating, manipulating, and displaying digital pictorial data. At its core, the system relies on physical display components and mathematical representations.</p>
      
      <div class="info-callout">
        <h4>Core Concepts for the Exam:</h4>
        <ul class="slide-bullet-list">
          <li><strong>Pixel (Picture Element):</strong> The fundamental atomic unit of a digital image. A point light source represented by coordinates on a 2D matrix.</li>
          <li><strong>Resolution:</strong> The density of pixels on the display screen. Expressed as horizontal &times; vertical counts (e.g. 1920 &times; 1080). Higher density reduces the size of individual pixels, yielding greater detail.</li>
          <li><strong>Aspect Ratio:</strong> The physical proportion of screen width to height (e.g. 4:3 or 16:9). To draw shapes correctly without skewing, the software must compensate for non-square pixel dimensions.</li>
          <li><strong>Frame Buffer:</strong> A specialized block of VRAM that holds the intensity or color bits for every single pixel on the screen. The video controller constantly reads this memory to refresh the display.</li>
        </ul>
      </div>

      <div class="math-box">
        <p><strong>Exhaustive Frame Buffer Size Calculations:</strong></p>
        To compute the frame buffer size in bytes:
        <br><code>Size = Width &times; Height &times; (Bit Depth) / 8</code>
        <br><br><strong>Example 1:</strong> Resolution 1280 &times; 1024 with 8-bit color depth (256 colors):
        <br><code>Size = 1280 &times; 1024 &times; 8 / 8 = 1,310,720 Bytes = 1.25 MB</code>
        <br><br><strong>Example 2:</strong> Resolution 1920 &times; 1080 with 24-bit True Color depth:
        <br><code>Size = 1920 &times; 1080 &times; 24 / 8 = 6,220,800 Bytes = 5.93 MB</code>
      </div>
    `
  },
  {
    title: "2. Display Architectures",
    content: `
      <h2>Raster Scan vs. Random Scan Displays</h2>
      <p>Display architectures define how the cathode ray tube's electron gun plots images on screen phosphors.</p>
      
      <div class="table-container">
        <table class="trace-table" style="font-size:0.85rem; width:100%;">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Raster Scan Display</th>
              <th>Random Scan Display (Vector)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Beam Sweep</strong></td>
              <td>Row-by-row systematically across the entire screen from top-left to bottom-right.</td>
              <td>Directly along the coordinates of lines. Shuts off (blanks) when jumping between shapes.</td>
            </tr>
            <tr>
              <td><strong>Memory Buffer</strong></td>
              <td>Frame Buffer holds color bits for every pixel location.</td>
              <td>Display Buffer (Display File) holds line commands (MOVE, LINE, DRAW).</td>
            </tr>
            <tr>
              <td><strong>Lines Quality</strong></td>
              <td>Jagged staircase lines (aliasing) due to pixel grid snapping.</td>
              <td>Perfectly smooth lines with no pixelation/aliasing.</td>
            </tr>
            <tr>
              <td><strong>Refresh Speed</strong></td>
              <td>Constant refresh rate (e.g. 60Hz) regardless of picture complexity.</td>
              <td>Dynamic refresh rate; too many vector lines cause flicker.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="info-callout" style="margin-top: 1rem;">
        <h4>CRT Components & Functions:</h4>
        <ul class="slide-bullet-list">
          <li><strong>Cathode:</strong> Heated filament emitting electrons via thermionic emission.</li>
          <li><strong>Control Grid:</strong> Negatively biased aperture cup that regulates beam electron density (brightness control).</li>
          <li><strong>Focusing & Accelerating Anodes:</strong> Focusing anode converges electrons into a tight spot; accelerating anode speeds them up to hit the screen phosphors with high kinetic energy.</li>
          <li><strong>Deflection Yoke:</strong> Vertical/Horizontal magnetic coils that bend the beam path.</li>
        </ul>
      </div>
    `
  },
  {
    title: "3. Line Algorithm Derivations",
    content: `
      <h2>DDA and Bresenham Line Algorithms</h2>
      <p>Scan-converting a line requires translating mathematical endpoints $(x_0, y_0)$ and $(x_1, y_1)$ into coordinate grids.</p>
      
      <h3>1. Digital Differential Analyzer (DDA) Derivation:</h3>
      <p>DDA uses floating-point additions. Slope $m = \Delta y / \Delta x$.</p>
      <ul>
        <li>If $|m| \le 1$ (horizontal trend): Increment $x_k$ by 1. $y_{k+1} = y_k + m$.</li>
        <li>If $|m| > 1$ (vertical trend): Increment $y_k$ by 1. $x_{k+1} = x_k + 1/m$.</li>
      </ul>
      <p>Each step computes decimals requiring slow rounding: <code>round(x_k, y_k)</code>.</p>

      <h3>2. Bresenham's Integer-Only Derivation ($0 \le m \le 1$):</h3>
      <p>Given current pixel $(x_k, y_k)$, the next is either East $E(x_k+1, y_k)$ or North-East $NE(x_k+1, y_k+1)$.</p>
      <p>The true line Y at $x_k+1$ is $y = m(x_k+1) + c$. The vertical distances are:</p>
      <ul>
        <li>$d_1 = y - y_k = m(x_k+1) + c - y_k$</li>
        <li>$d_2 = (y_k+1) - y = y_k+1 - m(x_k+1) - c$</li>
      </ul>
      <p>Subtracting $d_2$ from $d_1$ and multiplying by $dx$ yields the decision variable $P_k$:</p>
      <div class="math-box" style="text-align:center; font-family:var(--font-mono); font-size:0.85rem;">
        P_k = dx(d_1 - d_2) = 2dy &middot; x_k - 2dx &middot; y_k + 2dy + dx(2c - 1)
      </div>
      <p>The recurrence relation is:</p>
      <div class="math-box" style="text-align:center; font-family:var(--font-mono); font-size:0.85rem;">
        P_{k+1} - P_k = 2dy - 2dx(y_{k+1} - y_k)
      </div>
      <ul>
        <li><strong>If $P_k < 0$:</strong> Select East ($E$). $y_{k+1} = y_k$. Recurrence: <code>P_{k+1} = P_k + 2dy</code></li>
        <li><strong>If $P_k \ge 0$:</strong> Select North-East ($NE$). $y_{k+1} = y_k + 1$. Recurrence: <code>P_{k+1} = P_k + 2dy - 2dx</code></li>
        <li><strong>Initial Parameter:</strong> <code>P_0 = 2dy - dx</code></li>
      </ul>
    `
  },
  {
    title: "4. Curves & Ellipses Derivations",
    content: `
      <h2>Midpoint Circle & Ellipse Derivations</h2>
      <p>Curves are drawn by selecting grid coordinates closest to continuous equations using midpoint criteria.</p>
      
      <h3>1. Midpoint Circle Octant Derivation:</h3>
      <p>Circle equation: $f(x,y) = x^2 + y^2 - R^2 = 0$. Starting at $(0, R)$ in the first octant ($0 \le x \le y$).</p>
      <p>Next candidates: $E(x_k+1, y_k)$ and $SE(x_k+1, y_k-1)$. The midpoint is $M(x_k+1, y_k-0.5)$. We evaluate $f(M)$:</p>
      <div class="math-box" style="text-align:center; font-family:var(--font-mono); font-size:0.85rem;">
        P_k = f(x_k+1, y_k-0.5) = (x_k+1)^2 + (y_k-0.5)^2 - R^2
      </div>
      <ul>
        <li><strong>If $P_k < 0$:</strong> Choose $E$. $y_{k+1} = y_k$. <code>P_{k+1} = P_k + 2x_{k+1} + 1</code></li>
        <li><strong>If $P_k \ge 0$:</strong> Choose $SE$. $y_{k+1} = y_k - 1$. <code>P_{k+1} = P_k + 2x_{k+1} + 1 - 2y_{k+1}</code></li>
        <li><strong>Initial Parameter:</strong> <code>P_0 = f(1, R-0.5) = 1 + (R-0.5)^2 - R^2 = 1.25 - R &asymp; 1 - R</code> (using integer boundaries)</li>
      </ul>

      <h3>2. Midpoint Ellipse Regions:</h3>
      <p>Ellipse equation: $r_y^2 x^2 + r_x^2 y^2 - r_x^2 r_y^2 = 0$. Split into two regions at tangent slope $dy/dx = -1$.</p>
      <ul>
        <li><strong>Region 1 (Slope $> -1$):</strong> Steps along $x$. Decision parameter:
          <br><code>P1_k = r_y^2(x_k+1)^2 + r_x^2(y_k-0.5)^2 - r_x^2 r_y^2</code>
          <br><code>P1_0 = r_y^2 - r_x^2 r_y + 0.25 r_x^2</code>
        </li>
        <li><strong>Region 2 (Slope $\le -1$):</strong> Steps along $y$. Decision parameter:
          <br><code>P2_k = r_y^2(x_k+0.5)^2 + r_x^2(y_k-1)^2 - r_x^2 r_y^2</code>
        </li>
      </ul>
    `
  },
  {
    title: "5. Thick Primitives & Filling",
    content: `
      <h2>Primitive Thickness & Polygon Filling</h2>
      
      <h3>1. Area Filling Concepts:</h3>
      <ul class="slide-bullet-list">
        <li><strong>Even-Odd Inside-Outside Test:</strong> Draw a ray from test point to infinity. Odd edge crossings = point is inside; Even crossings = point is outside.</li>
        <li><strong>Boundary-Fill (Recursive):</strong> Floods pixels inside a region bounded by a single solid color. Checks 4-connected (top, bottom, left, right) or 8-connected (includes diagonals) neighbors.</li>
        <li><strong>Flood-Fill:</strong> Replaces a specified background color with a fill color. Used when shape boundaries contain multiple colors.</li>
      </ul>

      <h3>2. Scan-Line Edge Table (ET) & Active Edge Table (AET):</h3>
      <p>For rendering filled polygons efficiently, scanline algorithms do not test every pixel:</p>
      <ol style="line-height:1.6; font-size:0.9rem;">
        <li>Create the <strong>Edge Table (ET)</strong>: Contains all non-horizontal edges sorted by minimum Y coordinate ($y_{min}$). Each edge record stores $y_{max}$, starting $x$, and inverse slope $1/m$.</li>
        <li>For each scanline $Y$, transfer edges from ET to the <strong>Active Edge Table (AET)</strong> where $Y \ge y_{min}$.</li>
        <li>Sort AET by current $x$ coordinate.</li>
        <li>Draw horizontal fill lines between odd and even pairs of AET edges (e.g. Edge 1 to Edge 2, Edge 3 to Edge 4).</li>
        <li>Increment scanline $Y$. Remove edges from AET if $Y \ge y_{max}$, and update remaining X coordinates: $x_{new} = x + 1/m$.</li>
      </ol>
    `
  },
  {
    title: "6. 2D Transformations",
    content: `
      <h2>Mathematical 2D Object Transformations</h2>
      <p>All transformations modify coordinate geometry. Represented using matrix forms with Homogeneous Coordinates $(x, y, 1)$.</p>
      
      <div class="math-box" style="font-family:var(--font-mono); font-size:0.85rem;">
        <p><strong>1. Translation (Shifting):</strong></p>
        x' = x + t_x,   y' = y + t_y
        <br>[x', y', 1]^T = [[1, 0, tx], [0, 1, ty], [0, 0, 1]] &middot; [x, y, 1]^T
      </div>

      <div class="math-box" style="font-family:var(--font-mono); font-size:0.85rem;">
        <p><strong>2. Rotation (around origin):</strong></p>
        x' = x&middot;cos&theta; - y&middot;sin&theta;,   y' = x&middot;sin&theta; + y&middot;cos&theta;
        <br>[x', y', 1]^T = [[cos&theta;, -sin&theta;, 0], [sin&theta;, cos&theta;, 0], [0, 0, 1]] &middot; [x, y, 1]^T
      </div>

      <div class="math-box" style="font-family:var(--font-mono); font-size:0.85rem;">
        <p><strong>3. Scaling (relative to origin):</strong></p>
        x' = x &middot; s_x,   y' = y &middot; s_y
        <br>[x', y', 1]^T = [[sx, 0, 0], [0, sy, 0], [0, 0, 1]] &middot; [x, y, 1]^T
      </div>
    `
  }
];

const studyGuideDataCS = [
  {
    title: "1. Cybercrime Basics & Origins",
    content: `
      <h2>Cybercrime & CIA Triad</h2>
      <p>Cybercrime represents any illegal activity utilizing digital device arrays as a target or tool.</p>
      
      <div class="info-callout">
        <h4>Word Origins:</h4>
        Coined from the Greek <em>Kybernetes</em> (governor/steersman). Norbert Wiener formulated <strong>Cybernetics</strong> in 1948 to analyze machine control channels. 'Cyber' represents the virtual interactive dimensions of networks.
      </div>

      <div class="info-callout" style="border-left-color:var(--accent-purple);">
        <h4>Defense: Information Security (InfoSec) Goals</h4>
        Defense centers on protecting the <strong>CIA Triad</strong>:
        <ul>
          <li><strong>Confidentiality:</strong> Preventing unauthorized data leaks (using encryption).</li>
          <li><strong>Integrity:</strong> Ensuring data remains unaltered and accurate (using hashes).</li>
          <li><strong>Availability:</strong> Ensuring resources are accessible when needed (redundancy/DDoS protection).</li>
        </ul>
      </div>

      <div class="info-callout" style="border-left-color:var(--danger-color);">
        <h4>Cybercriminals Classifications:</h4>
        <ul>
          <li><strong>Hackers:</strong> White hat (ethical), Black hat (crackers/malicious), Grey hat (unauthorized research).</li>
          <li><strong>Script Kiddies:</strong> Amateurs executing attacks using pre-made scripts.</li>
          <li><strong>Insider Threats:</strong> Employees abusing legitimate system access keys (highest operational risk).</li>
          <li><strong>Cyber Terrorists:</strong> Attackers targeting national infrastructure (power, transit) to spread panic.</li>
        </ul>
      </div>
    `
  },
  {
    title: "2. Crimes Classifications",
    content: `
      <h2>Specific Cybercrime Classifications</h2>
      <p>Unit-I maps key classifications of cyber attacks. Understand these definitions for theory questions:</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>1. E-Mail Spoofing</h4>
          Altering headers to make an email appear to originate from a trusted sender. SMTP lacks native authentication, allowing header forgery.
        </div>
        <div class="info-callout" style="border-left-color:var(--accent-purple);">
          <h4>2. Spamming</h4>
          Sending unsolicited bulk emails. Clogs bandwidth, space, and serves as a vehicle for phishing links.
        </div>
      </div>

      <div class="slide-grid-2">
        <div class="info-callout" style="border-left-color:var(--warning-color);">
          <h4>3. Salami Technique</h4>
          Financial thefts shaving fractions of cents ($0.005) from thousands of transactions into a hacker account. Individual users miss the loss, hiding the crime.
        </div>
        <div class="info-callout" style="border-left-color:var(--danger-color);">
          <h4>4. Data Diddling</h4>
          Altering input data at the source *before* entry (e.g. changing price digits on registry slips).
        </div>
      </div>

      <div class="info-callout">
        <h4>5. Web Jacking & defacement</h4>
        Hijacking DNS server records to redirect visitors to a clone page (phishing portal) or defacing the home content of a government site.
      </div>
    `
  },
  {
    title: "3. Offense Planning Lifecycle",
    content: `
      <h2>How Criminals Plan Attacks</h2>
      <p>Attacks are executed in structured stages. Gathering info is critical to exploiting systems.</p>
      
      <div class="math-box">
        <p><strong>Reconnaissance (Information Gathering):</strong></p>
        <ul>
          <li><strong>Passive Reconnaissance:</strong> Snooping on the target indirectly without direct interaction (e.g. WHOIS lookups, DNS records harvest, scanning public database indices).</li>
          <li><strong>Active Reconnaissance:</strong> Interacting directly with the target to find open gates (e.g. port scanning, ping sweeps, banner grabbing to identify OS and patch numbers).</li>
        </ul>
      </div>

      <div class="info-callout" style="border-left-color:var(--accent-purple);">
        <h4>Passive vs. Active Attacks:</h4>
        <ul>
          <li><strong>Passive Attacks:</strong> Capture network data without modifying assets (e.g. packet sniffing, traffic analysis). Breaks <em>Confidentiality</em>.</li>
          <li><strong>Active Attacks:</strong> Modify system configurations, insert malware, or block service availability (e.g. SQL Injections, MitM packet manipulation, DDoS floods). Breaks <em>Integrity</em> and <em>Availability</em>.</li>
        </ul>
      </div>
    `
  },
  {
    title: "4. Shared Spaces & Cloud Vulnerability",
    content: `
      <h2>Shared Environments Risk Vectors</h2>
      <p>Shared cafes and cloud server networks present different security challenges.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Cybercafe Risks:</h4>
          <ul>
            <li><strong>Hardware Keyloggers:</strong> USB interceptors plugged between keyboard and PC to record passwords.</li>
            <li><strong>Session Hijacking:</strong> Scraped browser cookies allow subsequent customers to bypass login panels.</li>
            <li><strong>Insecure Routers:</strong> Cafe routers often lack traffic isolation, enabling passive sniffing.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color:var(--accent-purple);">
          <h4>Cloud Computing Risks:</h4>
          <ul>
            <li><strong>Shared Responsibility Model:</strong> Cloud provider secures hardware, but user is responsible for container configuration.</li>
            <li><strong>API Hijacking:</strong> Vulnerabilities in cloud administrative interfaces.</li>
            <li><strong>Hypervisor escapes:</strong> Exploits allowing a guest VM to access the underlying host OS or adjacent tenant containers.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "5. Mobile Devices & Card Frauds",
    content: `
      <h2>Mobile Security & Card Fraud</h2>
      
      <h3>1. Mobile Security Challenges:</h3>
      <p>Smartphone proliferation increases corporate exposure via:</p>
      <ul>
        <li><strong>BYOD (Bring Your Own Device):</strong> Blending personal apps with corporate networks.</li>
        <li><strong>Unencrypted Cache:</strong> Apps saving access tokens locally in plain text SQLite databases.</li>
        <li><strong>OS Jailbreaking/Rooting:</strong> Disabling OS sandboxing policies.</li>
      </ul>

      <h3>2. Credit Card Fraud Types:</h3>
      <ul class="slide-bullet-list">
        <li><strong>CNP (Card-Not-Present) Fraud:</strong> Online checkouts where physical swipe is not required. Attackers use card metadata harvested from database hacks or phishing.</li>
        <li><strong>RFID Skimming:</strong> Handheld scanners intercepting card chip details wirelessly in close public proximity.</li>
        <li><strong>Keyloggers:</strong> Malware recording touch screen inputs to steal card credentials.</li>
      </ul>
    `
  },
  {
    title: "6. Mobile Registry & MDM Policies",
    content: `
      <h2>Registry Hardening & Enterprise Policies</h2>
      <p>Hardening mobile systems involves editing configurations and enforcing MDM controls.</p>
      
      <div class="math-box">
        <p><strong>Registry Hardening Keys (Windows Mobile):</strong></p>
        1. Bluetooth discoverable toggle (Set to 0 to block scanner scans):
        <br><code>HKLM\\Comm\\Conn\\BT: Discoverable = 0</code>
        <br>2. Force password lock on screen wake:
        <br><code>HKLM\\Security\\Policies: PasswordRequired = 1</code>
        <br>3. Block unsigned CAB installations (Prevent malware cabinet execution):
        <br><code>HKLM\\Security\\Policies: BlockUnsignedCAB = 1</code>
      </div>

      <div class="info-callout" style="border-left-color:var(--success-color);">
        <h4>Enterprise Management Policies:</h4>
        <ul>
          <li><strong>MDM (Mobile Device Management):</strong> Software forcing password complexity, device tracking, and remote wipe configurations.</li>
          <li><strong>Containerization:</strong> Separating corporate data into encrypted storage profiles.</li>
          <li><strong>Laptop Security:</strong> Full-disk encryption (BitLocker), disabling boot key options, and requiring VPN tunnels.</li>
        </ul>
      </div>
    `
  }
];

function initStudyGuide() {
  const guideListNav = document.getElementById('studyguide-list-nav');
  const readerContent = document.getElementById('studyguide-reader-content');
  
  let activeGuideIdx = 0;
  const guideData = activeSubject === 'cg' ? studyGuideDataCG : studyGuideDataCS;
  
  // Render Sidebar
  guideListNav.innerHTML = '';
  guideData.forEach((chapter, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = `slide-nav-item study-nav-item ${index === 0 ? 'active' : ''}`;
    button.innerHTML = `<span class="slide-num">${String(index + 1).padStart(2, '0')}</span> ${chapter.title}`;
    button.addEventListener('click', () => {
      loadChapter(index);
    });
    li.appendChild(button);
    guideListNav.appendChild(li);
  });
  
  // Load initial chapter
  loadChapter(0);
  
  function loadChapter(index) {
    if (index < 0 || index >= guideData.length) return;
    activeGuideIdx = index;
    
    // Render content
    readerContent.innerHTML = guideData[index].content;
    
    // Highlight sidebar
    const items = guideListNav.querySelectorAll('.study-nav-item');
    items.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('active');
        btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  // Expose globally
  window.refreshStudyGuide = () => {
    initStudyGuide();
  };
}

// Cyber Security Slides Database
const slidesDataAI = [
  {
    title: "Course Overview & Syllabus Map",
    unit: "Intro",
    content: `
      <h2>Artificial Intelligence <span class="slide-unit-badge">IMCA603T</span></h2>
      <p>Welcome! This section is structured to prepare you for the IMCA603T Artificial Intelligence exam, covering Units I and II in deep academic detail.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Unit-I: Introduction & Intelligent Agents</h4>
          <ul class="slide-bullet-list">
            <li><strong>AI Foundations:</strong> Definitions, Background, Applications, and historical viewpoints.</li>
            <li><strong>Methodologies:</strong> Turing Test vs. Cognitive Modeling vs. Rational Agent approaches.</li>
            <li><strong>Intelligent Agents:</strong> Agent structure (sensors, actuators, programs), behaviors, and environment classifications.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color: var(--accent-purple);">Unit-II: Problem Solving & Search</h4>
          <ul class="slide-bullet-list">
            <li><strong>Search Techniques:</strong> Uninformed Search (BFS, DFS) vs. Heuristics (Best-First, A*).</li>
            <li><strong>Hill Climbing:</strong> Steepest-Ascent, Plateaus, Local Maxima traps.</li>
            <li><strong>Game Trees:</strong> Min-Max game evaluation, Alpha-Beta pruning cutoffs.</li>
            <li><strong>Problem Types:</strong> CSPs (N-Queens), Means-End Analysis.</li>
          </ul>
        </div>
      </div>
      
      <p>💡 <em>Toggle between slides, flashcards, textbook guide chapters, and interactive visualizers using the main menu above!</em></p>
    `
  },
  {
    title: "Syllabus Unit-I: Definition & Turing Test",
    unit: "Unit-I",
    content: `
      <h2>What is AI & The Turing Test <span class="slide-unit-badge">Unit-I</span></h2>
      <p><strong>Artificial Intelligence</strong> is the study of agents that receive percepts from the environment and perform actions rationally.</p>
      
      <div class="info-callout">
        <h4>1. Turing Test (Alan Turing, 1950):</h4>
        Designed to provide a satisfactory operational definition of intelligence. A human interrogator asks questions to two hidden entities (a human and a computer) via text terminal.
        <br>If the interrogator cannot reliably tell the computer from the human after 5 minutes of questioning, the computer passes the test.
        <br><strong>Capabilities Required to Pass:</strong>
        <ul>
          <li>Natural Language Processing (NLP) to communicate.</li>
          <li>Knowledge Representation to store info.</li>
          <li>Automated Reasoning to draw conclusions.</li>
          <li>Machine Learning to adapt to new patterns.</li>
        </ul>
        <em>Total Turing Test:</em> Includes video/physical interaction, requiring Computer Vision and Robotics.
      </div>

      <div class="math-box">
        <p><strong>2. Rational Agent Approach:</strong></p>
        A <strong>Rational Agent</strong> is one that acts to achieve the best expected outcome (maximizing utility) based on its current knowledge. Unlike the Turing Test (which mimics human behavior, flaws included), rationality focuses on doing the *right thing* logically.
      </div>
    `
  },
  {
    title: "Syllabus Unit-I: Intelligent Agents",
    unit: "Unit-I",
    content: `
      <h2>Intelligent Agents Structure & Environment <span class="slide-unit-badge">Unit-I</span></h2>
      <p>An <strong>Agent</strong> is anything that perceives its environment through sensors and acts upon it through actuators. Formula: <code>Agent = Architecture + Program</code>.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Agent Structure components:</h4>
          <ul>
            <li><strong>Sensors:</strong> Inputs from the world (e.g. cameras, keyboard, sonar).</li>
            <li><strong>Actuators:</strong> Means to change the world (e.g. robot legs, screen print commands, motor wheels).</li>
            <li><strong>Agent Program:</strong> The mapping algorithm translating percept history to actions.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">PEAS Framework (Design Specifications):</h4>
          <ul>
            <li><strong>P - Performance Measure:</strong> Metrics determining agent success (e.g. safety, speed, fuel economy).</li>
            <li><strong>E - Environment:</strong> Outer context (e.g. roads, weather, server states).</li>
            <li><strong>A - Actuators:</strong> Manipulators (steering, display).</li>
            <li><strong>S - Sensors:</strong> Inputs (GPS, speedometer).</li>
          </ul>
        </div>
      </div>

      <div class="math-box">
        <p><strong>Environment Classifications (Exam Essentials):</strong></p>
        * **Observable vs. Partially Observable:** Are sensors capturing the complete world state?
        <br>* **Deterministic vs. Stochastic:** Does the next state depend *only* on the current state and action?
        <br>* **Episodic vs. Sequential:** Are current decisions independent of past choices?
        <br>* **Static vs. Dynamic:** Can the environment change while the agent is calculating?
        <br>* **Discrete vs. Continuous:** Are states and actions finite or infinite?
      </div>
    `
  },
  {
    title: "Syllabus Unit-II: Search Techniques",
    unit: "Unit-II",
    content: `
      <h2>Problem Solving & Search Techniques <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Problem-solving agents formulate goals and states to find sequences of actions representing paths to success.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Uninformed Search (Blind):</h4>
          Lacks goal proximity information.
          <ul>
            <li><strong>Breadth-First Search (BFS):</strong> Explores layer-by-layer using a FIFO Queue. Guarantees the shortest path if step costs are equal. Space Complexity: $O(b^d)$ (high memory).</li>
            <li><strong>Depth-First Search (DFS):</strong> Explores branch-by-branch using a LIFO Stack. Space Complexity: $O(b \cdot d)$ (low memory). Not optimal, can get trapped in infinite paths.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">Informed Search (Heuristic):</h4>
          Uses heuristics ($h(n)$) estimating cost to target.
          <ul>
            <li><strong>Greedy Best-First:</strong> Expands node closest to goal based *only* on heuristic: $f(n) = h(n)$. Fast but not optimal.</li>
            <li><strong>A* Algorithm:</strong> Expands nodes minimizing total estimated path cost: $$f(n) = g(n) + h(n)$$ where $g(n)$ is actual cost from start to node $n$. Optimal and complete if $h(n)$ is admissible ($h(n) \le h^*(n)$).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Syllabus Unit-II: Hill Climbing & Games",
    unit: "Unit-II",
    content: `
      <h2>Hill Climbing & Adversarial Games <span class="slide-unit-badge">Unit-II</span></h2>
      <p>Local search algorithms focus on finding peaks in state-space graphs, while adversarial searches compute optimal game moves.</p>
      
      <div class="slide-grid-2">
        <div class="info-callout">
          <h4>Hill Climbing (Local Search):</h4>
          An iterative loop that steps toward higher elevation (improvement) neighbors.
          <br><strong>Vulnerabilities:</strong>
          <ul>
            <li>*Local Maxima:* Peaks that are higher than their neighbors but lower than the global peak.</li>
            <li>*Plateaus:* Flat zones where all neighbors have equal elevation, stalling progress.</li>
            <li>*Ridges:* Slopes that slope downwards in both directions, making traversal difficult.</li>
          </ul>
        </div>
        <div class="info-callout" style="border-left-color: var(--accent-purple);">
          <h4 style="color:var(--accent-purple);">Minimax & Alpha-Beta Pruning:</h4>
          Used in 2-player games (Max vs. Min).
          <ul>
            <li><strong>Minimax:</strong> Recursively backs up game scores. Max chooses maximum child score; Min chooses minimum child score.</li>
            <li><strong>Alpha-Beta Pruning:</strong> Cut off sub-trees that cannot affect the final minimax decision.
              <br>• $\alpha$: Best value for Max along path ($-\infty$ start).
              <br>• $\beta$: Best value for Min along path ($+\infty$ start).
              <br>• Prune branch when $\beta \le \alpha$.
            </li>
          </ul>
        </div>
      </div>
    `
  }
];

// AI Flashcards Database
const flashcardsDataAI = [
  {
    category: "Unit-I: AI Basics",
    question: "Define the **Turing Test** and name the 4 capabilities required to pass it.",
    answer: "The Turing Test determines if a computer can exhibit human-like intelligence. A computer passes if a human interrogator cannot distinguish it from a human after 5 minutes of text chat. Requires: 1) Natural Language Processing, 2) Knowledge Representation, 3) Automated Reasoning, 4) Machine Learning."
  },
  {
    category: "Unit-I: Agents",
    question: "Explain the **PEAS** framework for agent design.",
    answer: "PEAS stands for:<ul><li><strong>P:</strong> Performance Measure (how agent success is measured)</li><li><strong>E:</strong> Environment (the physical/virtual world the agent operates in)</li><li><strong>A:</strong> Actuators (hardware/software mechanisms used to execute actions)</li><li><strong>S:</strong> Sensors (devices capturing world percept inputs)</li></ul>"
  },
  {
    category: "Unit-II: Search",
    question: "Why is the **A*** algorithm considered complete and optimal?",
    answer: "A* expands nodes minimizing $f(n) = g(n) + h(n)$. It is complete and optimal if the heuristic $h(n)$ is **admissible** (never overestimates the true cost to the goal, i.e., $h(n) \le h^*(n)$) and **consistent** (satisfies triangle inequality $h(n) \le c(n,a,n') + h(n')$)."
  },
  {
    category: "Unit-II: Search",
    question: "Describe the three traps of **Hill Climbing** local search.",
    answer: "<ul><li><strong>1. Local Maxima:</strong> A peak that is higher than neighboring states but lower than the global optimum. Agent gets stuck because all steps lead down.</li><li><strong>2. Plateaus:</strong> A flat state area where all neighbors have the same value, resulting in zero gradient.</li><li><strong>3. Ridges:</strong> Slopes rising in one direction but falling steeply on both sides, causing the agent to bounce back and forth.</li></ul>"
  },
  {
    category: "Unit-II: Game Trees",
    question: "Define **Alpha (α)** and **Beta (β)** in Game Playing, and state the pruning condition.",
    answer: "<ul><li><strong>Alpha (α):</strong> The highest (best) value found so far for MAX along the path. Initialized to $-\infty$.</li><li><strong>Beta (β):</strong> The lowest (best) value found so far for MIN along the path. Initialized to $+\infty$.</li></ul>Pruning occurs (sub-trees are skipped) as soon as <strong>&beta; &le; &alpha;</strong>."
  },
  {
    category: "Unit-II: Problem Solving",
    question: "What is a **Constraint Satisfaction Problem (CSP)**?",
    answer: "A CSP is a problem defined by a set of **Variables** ($V$), a set of **Domains** ($D$, values for variables), and a set of **Constraints** ($C$, restrictions on compatible values). Example: Map Coloring, Cryptarithmetic, Sudoku, N-Queens."
  },
  {
    category: "Unit-II: Search",
    question: "What is **Means-Ends Analysis (MEA)**?",
    answer: "MEA is a problem-solving strategy that aims to resolve differences between the current state and the goal state. It identifies differences, selects **Operators** (actions) designed to reduce the largest difference, and applies them recursively."
  }
];

// AI Study Guide Textbook Database
const studyGuideDataAI = [
  {
    title: "1. AI Foundations & Agents",
    content: `
      <h2>Intelligent Agents & Turing Test</h2>
      
      <h3>1. Turing Test & Rationality:</h3>
      <p>Alan Turing (1950) proposed an operational test of intelligence, sidestepping philosophical debates about "thinking machines":</p>
      <ul>
        <li><strong>Total Turing Test:</strong> Adds vision and physical manipulation capability to test sensory-motor skills, requiring robotics and computer vision.</li>
        <li><strong>The Rational Agent Approach:</strong> Focuses on creating agents that act to achieve the best expected outcome based on percept history. This is mathematically and computationally cleaner than mimicking human behavior, which is often flawed or emotional.</li>
      </ul>

      <h3>2. PEAS Designing Matrix (Examples):</h3>
      <div class="table-container">
        <table class="trace-table" style="font-size:0.82rem; width:100%;">
          <thead>
            <tr>
              <th>Agent Type</th>
              <th>Performance (P)</th>
              <th>Environment (E)</th>
              <th>Actuators (A)</th>
              <th>Sensors (S)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Autonomous Taxi</strong></td>
              <td>Safety, speed, legal drive, passenger comfort.</td>
              <td>Roads, traffic, pedestrians, weather.</td>
              <td>Steering wheel, accelerator, brake, horn.</td>
              <td>Cameras, LiDAR, GPS, sonar, speedometer.</td>
            </tr>
            <tr>
              <td><strong>Spam Filter</strong></td>
              <td>Minimize false positives and negatives.</td>
              <td>Email server stream, inbox accounts.</td>
              <td>Move to Spam folder, flag email, notify.</td>
              <td>Text parser, header analyzer, sender IP lookup.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="info-callout" style="margin-top:1rem;">
        <h4>Agent Architectures:</h4>
        <ul>
          <li><strong>Simple Reflex Agents:</strong> Select actions based *only* on the current percept (condition-action rules).</li>
          <li><strong>Model-Based Reflex Agents:</strong> Keep track of the unobserved world state using an internal model of how the world works.</li>
          <li><strong>Goal-Based Agents:</strong> Combine state tracking with goal descriptions to select actions that achieve desired outcomes.</li>
          <li><strong>Utility-Based Agents:</strong> Use a utility function to rate states, letting them choose actions that maximize overall happiness/efficiency.</li>
        </ul>
      </div>
    `
  },
  {
    title: "2. BFS, DFS & A* Search",
    content: `
      <h2>Search Algorithms & Heuristics</h2>
      <p>Search algorithms explore tree or grid states to find path sequences leading to goal nodes.</p>
      
      <h3>1. Comparison of Uninformed (Blind) Search:</h3>
      <ul>
        <li><strong>Breadth-First Search (BFS):</strong> Expands the shallowest node first. Uses a FIFO queue. It is complete and optimal (if step costs are equal). Space complexity: $O(b^d)$, which can quickly exhaust memory.</li>
        <li><strong>Depth-First Search (DFS):</strong> Expands the deepest node first. Uses a LIFO stack. It is not complete (can loop infinitely in cyclic graphs) and not optimal. Space complexity: $O(b \cdot d)$, which is highly memory efficient.</li>
      </ul>

      <h3>2. Heuristic Search: A* Algorithm:</h3>
      <p>A* evaluates nodes using the function: $$f(n) = g(n) + h(n)$$</p>
      <ul style="line-height:1.5;">
        <li>$g(n)$: The exact cost incurred to reach node $n$ from the start node.</li>
        <li>$h(n)$: The estimated heuristic cost to reach the goal from node $n$.</li>
        <li><strong>Admissibility:</strong> A heuristic $h(n)$ is admissible if it never overestimates the true cost to the goal: $h(n) \le h^*(n)$. This guarantees that A* finds the optimal path.</li>
        <li><strong>Consistency (Monotonicity):</strong> A heuristic is consistent if, for every node $n$ and successor $n'$ generated by action $a$: $h(n) \le c(n, a, n') + h(n')$. consistent heuristics ensure A* never needs to re-expand nodes.</li>
      </ul>
    `
  },
  {
    title: "3. Minimax & Alpha-Beta Pruning",
    content: `
      <h2>Game Playing & Alpha-Beta Cutoffs</h2>
      <p>Games are modeled as adversarial search trees where Max and Min take turns selecting moves.</p>
      
      <h3>1. Minimax Algorithm Backup Rules:</h3>
      <ul>
        <li>At MAX nodes: return the maximum value of child evaluations: $$v = \max(v_{child})$$</li>
        <li>At MIN nodes: return the minimum value of child evaluations: $$v = \min(v_{child})$$</li>
      </ul>

      <h3>2. Alpha-Beta Pruning Inequality:</h3>
      <p>Alpha-Beta pruning skips branches that cannot change the final decision of the root node. The alpha and beta values are updated during DFS traversal:</p>
      <ul>
        <li>$\alpha$ (alpha): The best value Max is guaranteed to achieve. Max nodes update $\alpha = \max(\alpha, child\_val)$.</li>
        <li>$\beta$ (beta): The best value Min is guaranteed to achieve. Min nodes update $\beta = \min(\beta, child\_val)$.</li>
        <li><strong>Cutoff Rule:</strong> If at any point in the tree we find $\beta \le \alpha$, we stop evaluating the remaining siblings of that sub-tree.</li>
      </ul>

      <div class="math-box">
        <p><strong>Alpha Cutoff Example:</strong></p>
        Let MAX have a child MIN node $C_1$ that returns value 5. So MAX has $\alpha = 5$.
        <br>MAX evaluates another child MIN node $C_2$. If the first grandchild of $C_2$ returns value 2, then $C_2$ (being MIN) will return a value of <strong>at most 2</strong>.
        <br>Because MAX already has a guaranteed move of value 5, MAX will never choose $C_2$. Thus, we prune all remaining siblings of $C_2$'s children without evaluating them!
      </div>
    `
  }
];

// ==========================================
// AI SIMULATORS LOGIC
// ==========================================
let aiSimInterval = null;
let aiSimState = {
  activeSim: 'pathfinder',
  isRunning: false,
  grid: [], // Pathfinder 12x12
  startNode: [2, 2],
  targetNode: [9, 9],
  walls: new Set()
};

function initAiSimulators() {
  const aiSelect = document.getElementById('ai-select');
  const playBtn = document.getElementById('ai-btn-play');
  const resetBtn = document.getElementById('ai-btn-reset');
  
  // Select panel toggler
  aiSelect.addEventListener('change', () => {
    const active = aiSelect.value;
    aiSimState.activeSim = active;
    
    // Header/Subtitle mapping
    const titleMap = {
      'pathfinder': 'BFS/DFS/A* Pathfinder',
      'minimax': 'Min-Max & Alpha-Beta Game Tree',
      'hill-climbing': 'Hill Climbing Traversal'
    };
    document.getElementById('ai-title').textContent = titleMap[active];
    document.getElementById('ai-subtitle').textContent = 'Ready to solve...';
    
    // Toggle Inputs/Screens
    document.querySelectorAll('.ai-inputs-panel').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.ai-screen-view').forEach(el => el.classList.add('hidden'));
    
    if (active === 'pathfinder') {
      document.getElementById('ai-inputs-pathfinder').classList.remove('hidden');
      document.getElementById('ai-render-pathfinder').classList.remove('hidden');
    } else if (active === 'minimax') {
      document.getElementById('ai-inputs-minimax').classList.remove('hidden');
      document.getElementById('ai-render-minimax').classList.remove('hidden');
      renderMinimaxTreeInitial(); // Render initial static tree
    } else if (active === 'hill-climbing') {
      document.getElementById('ai-inputs-hill').classList.remove('hidden');
      document.getElementById('ai-render-hill').classList.remove('hidden');
      drawHillClimbingInitial(); // Draw initial curve
    }
    
    resetAiSimulators();
  });
  
  // Play triggers
  playBtn.addEventListener('click', () => {
    if (aiSimState.isRunning) {
      pauseAiSimulation();
    } else {
      runAiSimulation();
    }
  });
  
  resetBtn.addEventListener('click', resetAiSimulators);
  
  // Initialize Pathfinder Grid Board
  buildPathfinderGridBoard();
}

function runAiSimulation() {
  aiSimState.isRunning = true;
  document.getElementById('ai-btn-play').textContent = 'Pause';
  
  const sim = aiSimState.activeSim;
  if (sim === 'pathfinder') {
    runPathfinderSearch();
  } else if (sim === 'minimax') {
    runMinimaxSearch();
  } else if (sim === 'hill-climbing') {
    runHillClimbingSearch();
  }
}

function pauseAiSimulation() {
  aiSimState.isRunning = false;
  document.getElementById('ai-btn-play').textContent = 'Run Simulation';
  clearInterval(aiSimInterval);
}

function resetAiSimulators() {
  pauseAiSimulation();
  document.getElementById('ai-audit-log').textContent = 'Awaiting simulation start...';
  
  const sim = aiSimState.activeSim;
  if (sim === 'pathfinder') {
    resetPathfinderBoard();
  } else if (sim === 'minimax') {
    renderMinimaxTreeInitial();
  } else if (sim === 'hill-climbing') {
    drawHillClimbingInitial();
  }
}

// 1. Pathfinder Search Engine
function buildPathfinderGridBoard() {
  const board = document.getElementById('ai-grid-board');
  if (!board) return;
  board.innerHTML = '';
  
  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 12; c++) {
      const cell = document.createElement('div');
      cell.className = 'ai-grid-cell';
      cell.id = `ai-cell-${r}-${c}`;
      
      // Mark start/target
      if (r === aiSimState.startNode[0] && c === aiSimState.startNode[1]) {
        cell.classList.add('cell-start');
      } else if (r === aiSimState.targetNode[0] && c === aiSimState.targetNode[1]) {
        cell.classList.add('cell-target');
      } else {
        // Toggle walls on click
        cell.addEventListener('click', () => {
          if (aiSimState.isRunning) return;
          const coordStr = `${r},${c}`;
          if (aiSimState.walls.has(coordStr)) {
            aiSimState.walls.delete(coordStr);
            cell.classList.remove('cell-wall');
          } else {
            aiSimState.walls.add(coordStr);
            cell.classList.add('cell-wall');
          }
        });
      }
      board.appendChild(cell);
    }
  }
}

function resetPathfinderBoard() {
  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 12; c++) {
      const cell = document.getElementById(`ai-cell-${r}-${c}`);
      if (cell) {
        cell.classList.remove('cell-visited', 'cell-path');
      }
    }
  }
}

function runPathfinderSearch() {
  resetPathfinderBoard();
  
  const algo = document.getElementById('ai-path-algo').value;
  const start = aiSimState.startNode;
  const target = aiSimState.targetNode;
  
  // Search state trackers
  const visited = [];
  const visitedOrder = [];
  const parentMap = {};
  
  // Priority Queue / Stack helper
  let frontier = [];
  
  if (algo === 'bfs') {
    frontier.push(start);
  } else if (algo === 'dfs') {
    frontier.push(start);
  } else if (algo === 'astar') {
    frontier.push({ node: start, g: 0, f: getManhattanDistance(start, target) });
  }
  
  const visitedSet = new Set();
  const parentKey = (node) => `${node[0]},${node[1]}`;
  visitedSet.add(parentKey(start));
  
  let found = false;
  
  while (frontier.length > 0) {
    let current;
    
    if (algo === 'bfs') {
      current = frontier.shift();
    } else if (algo === 'dfs') {
      current = frontier.pop();
    } else if (algo === 'astar') {
      // Find lowest F score
      frontier.sort((a, b) => a.f - b.f);
      const currObj = frontier.shift();
      current = currObj.node;
    }
    
    visitedOrder.push(current);
    
    if (current[0] === target[0] && current[1] === target[1]) {
      found = true;
      break;
    }
    
    const row = current[0];
    const col = current[1];
    
    // Neighbors (up, down, left, right)
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      const nKey = `${nr},${nc}`;
      
      // Boundaries & walls checks
      if (nr >= 0 && nr < 12 && nc >= 0 && nc < 12 && !aiSimState.walls.has(nKey) && !visitedSet.has(nKey)) {
        visitedSet.add(nKey);
        parentMap[nKey] = current;
        const neighbor = [nr, nc];
        
        if (algo === 'bfs' || algo === 'dfs') {
          frontier.push(neighbor);
        } else if (algo === 'astar') {
          const gScore = (algo === 'astar') ? (getGScore(current, parentMap) + 1) : 0;
          const fScore = gScore + getManhattanDistance(neighbor, target);
          frontier.push({ node: neighbor, g: gScore, f: fScore });
        }
      }
    }
  }
  
  function getGScore(node, pMap) {
    let score = 0;
    let curr = node;
    while (curr) {
      const key = parentKey(curr);
      curr = pMap[key];
      if (curr) score++;
    }
    return score;
  }
  
  // Reconstruct path
  const path = [];
  if (found) {
    let curr = target;
    while (curr) {
      path.push(curr);
      curr = parentMap[parentKey(curr)];
    }
    path.reverse();
  }
  
  // Animate exploration
  let step = 0;
  const audit = document.getElementById('ai-audit-log');
  audit.innerHTML = `[SOLVER] Initiating pathfinding search using ${algo.toUpperCase()}...`;
  
  aiSimInterval = setInterval(() => {
    if (step < visitedOrder.length) {
      const node = visitedOrder[step];
      const cell = document.getElementById(`ai-cell-${node[0]}-${node[1]}`);
      
      // Avoid coloring start/target
      if (cell && !cell.classList.contains('cell-start') && !cell.classList.contains('cell-target')) {
        cell.classList.add('cell-visited');
      }
      audit.textContent = `[SOLVING] Explored frontier node: (${node[0]}, ${node[1]}) [Steps: ${step + 1}]`;
      step++;
    } else {
      clearInterval(aiSimInterval);
      
      // Draw path
      if (found) {
        path.forEach(node => {
          const cell = document.getElementById(`ai-cell-${node[0]}-${node[1]}`);
          if (cell && !cell.classList.contains('cell-start') && !cell.classList.contains('cell-target')) {
            cell.classList.add('cell-path');
          }
        });
        audit.innerHTML = `<span class="status-safe">✅ PATH RESOLVED:</span> Successfully reached Target node in <strong>${path.length} steps</strong>. Total cells evaluated: ${visitedOrder.length}.`;
        document.getElementById('ai-subtitle').textContent = `Resolved in ${path.length} steps.`;
      } else {
        audit.innerHTML = `<span class="status-vuln">❌ NO PATH FOUND:</span> Target node is completely blocked by walls. Checked ${visitedOrder.length} reachable states.`;
        document.getElementById('ai-subtitle').textContent = 'No route available.';
      }
      
      aiSimState.isRunning = false;
      document.getElementById('ai-btn-play').textContent = 'Run Simulation';
    }
  }, 40);
}

function getManhattanDistance(n1, n2) {
  return Math.abs(n1[0] - n2[0]) + Math.abs(n1[1] - n2[1]);
}

// 2. Minimax & Alpha-Beta Game Tree Simulator
const treeNodes = {
  'A': { label: 'Root A (Max)', val: '?', x: 250, y: 30, depth: 0, type: 'max' },
  'B': { label: 'B (Min)', val: '?', x: 130, y: 85, depth: 1, type: 'min' },
  'C': { label: 'C (Min)', val: '?', x: 370, y: 85, depth: 1, type: 'min' },
  'D': { label: 'D (Max)', val: '?', x: 70, y: 140, depth: 2, type: 'max' },
  'E': { label: 'E (Max)', val: '?', x: 190, y: 140, depth: 2, type: 'max' },
  'F': { label: 'F (Max)', val: '?', x: 310, y: 140, depth: 2, type: 'max' },
  'G': { label: 'G (Max)', val: '?', x: 430, y: 140, depth: 2, type: 'max' },
  'H': { label: 'H', val: 3, x: 45, y: 195, depth: 3, type: 'leaf' },
  'I': { label: 'I', val: 5, x: 95, y: 195, depth: 3, type: 'leaf' },
  'J': { label: 'J', val: 6, x: 165, y: 195, depth: 3, type: 'leaf' },
  'K': { label: 'K', val: 9, x: 215, y: 195, depth: 3, type: 'leaf' },
  'L': { label: 'L', val: 2, x: 285, y: 195, depth: 3, type: 'leaf' },
  'M': { label: 'M', val: 1, x: 335, y: 195, depth: 3, type: 'leaf' },
  'N': { label: 'N', val: 4, x: 405, y: 195, depth: 3, type: 'leaf' },
  'O': { label: 'O', val: 8, x: 455, y: 195, depth: 3, type: 'leaf' }
};

const treeLinks = [
  { parent: 'A', child: 'B' }, { parent: 'A', child: 'C' },
  { parent: 'B', child: 'D' }, { parent: 'B', child: 'E' },
  { parent: 'C', child: 'F' }, { parent: 'C', child: 'G' },
  { parent: 'D', child: 'H' }, { parent: 'D', child: 'I' },
  { parent: 'E', child: 'J' }, { parent: 'E', child: 'K' },
  { parent: 'F', child: 'L' }, { parent: 'F', child: 'M' },
  { parent: 'G', child: 'N' }, { parent: 'G', child: 'O' }
];

function renderMinimaxTreeInitial() {
  const svg = document.getElementById('ai-tree-svg');
  if (!svg) return;
  svg.innerHTML = '';
  
  // Draw link lines
  treeLinks.forEach(link => {
    const pNode = treeNodes[link.parent];
    const cNode = treeNodes[link.child];
    
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", pNode.x);
    line.setAttribute("y1", pNode.y);
    line.setAttribute("x2", cNode.x);
    line.setAttribute("y2", cNode.y);
    line.setAttribute("class", "tree-link-line");
    line.setAttribute("id", `link-${link.parent}-${link.child}`);
    svg.appendChild(line);
  });
  
  // Draw node circles
  Object.keys(treeNodes).forEach(key => {
    const node = treeNodes[key];
    
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", 15);
    circle.setAttribute("class", "tree-node-circle");
    circle.setAttribute("id", `circle-${key}`);
    g.appendChild(circle);
    
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y);
    text.setAttribute("class", "tree-node-text");
    text.setAttribute("id", `text-${key}`);
    text.textContent = node.type === 'leaf' ? node.val : '?';
    g.appendChild(text);
    
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", node.x);
    label.setAttribute("y", node.y - 20);
    label.setAttribute("class", "tree-eval-label");
    label.textContent = node.depth === 0 ? "MAX" : node.depth === 1 ? "MIN" : node.depth === 2 ? "MAX" : "";
    g.appendChild(label);
    
    svg.appendChild(g);
  });
}

function runMinimaxSearch() {
  renderMinimaxTreeInitial();
  
  const isPruningEnabled = document.getElementById('ai-ab-pruning').checked;
  const audit = document.getElementById('ai-audit-log');
  audit.innerHTML = `[SOLVER] Initiating Min-Max DFS traversal (Pruning: ${isPruningEnabled ? 'ENABLED' : 'DISABLED'})...`;
  
  // Custom step animation list
  const steps = [];
  
  // Minimax with Alpha-Beta
  let alpha = -Infinity;
  let beta = Infinity;
  
  // Left subtree B
  // D
  steps.push({ type: 'visit', node: 'D', alpha, beta });
  steps.push({ type: 'visit', node: 'H', alpha, beta });
  steps.push({ type: 'backup', node: 'D', val: 3, alpha, beta });
  steps.push({ type: 'visit', node: 'I', alpha, beta });
  steps.push({ type: 'backup', node: 'D', val: 5, alpha, beta });
  steps.push({ type: 'backup', node: 'B', val: 5, alpha, beta }); // B updates beta = 5
  
  // E
  steps.push({ type: 'visit', node: 'E', alpha, beta: 5 });
  steps.push({ type: 'visit', node: 'J', alpha, beta: 5 });
  steps.push({ type: 'backup', node: 'E', val: 6, alpha, beta: 5 });
  steps.push({ type: 'visit', node: 'K', alpha, beta: 5 });
  steps.push({ type: 'backup', node: 'E', val: 9, alpha, beta: 5 });
  steps.push({ type: 'backup', node: 'B', val: 5, alpha, beta: 5 }); // B remains 5
  steps.push({ type: 'backup', node: 'A', val: 5, alpha: 5, beta }); // A updates alpha = 5
  
  // Right subtree C
  // F
  steps.push({ type: 'visit', node: 'C', alpha: 5, beta });
  steps.push({ type: 'visit', node: 'F', alpha: 5, beta });
  steps.push({ type: 'visit', node: 'L', alpha: 5, beta });
  steps.push({ type: 'backup', node: 'F', val: 2, alpha: 5, beta });
  steps.push({ type: 'visit', node: 'M', alpha: 5, beta });
  steps.push({ type: 'backup', node: 'F', val: 2, alpha: 5, beta }); // F remains 2 (Max is 2)
  steps.push({ type: 'backup', node: 'C', val: 2, alpha: 5, beta: 2 }); // C updates beta = 2
  
  // Check prune condition at C
  if (isPruningEnabled) {
    // beta of C (2) <= alpha of A (5) => PRUNE G!
    steps.push({ type: 'prune', node: 'G', parent: 'C', alpha: 5, beta: 2 });
  } else {
    // Normal Minimax traversal
    steps.push({ type: 'visit', node: 'G', alpha: 5, beta: 2 });
    steps.push({ type: 'visit', node: 'N', alpha: 5, beta: 2 });
    steps.push({ type: 'backup', node: 'G', val: 4, alpha: 5, beta: 2 });
    steps.push({ type: 'visit', node: 'O', alpha: 5, beta: 2 });
    steps.push({ type: 'backup', node: 'G', val: 8, alpha: 5, beta: 2 });
    steps.push({ type: 'backup', node: 'C', val: 2, alpha: 5, beta: 2 });
  }
  
  steps.push({ type: 'backup', node: 'A', val: 5, alpha: 5, beta: Infinity });
  
  // Animate steps
  let index = 0;
  aiSimInterval = setInterval(() => {
    if (index < steps.length) {
      const step = steps[index];
      
      // De-active previous nodes
      document.querySelectorAll('.tree-node-circle').forEach(el => el.classList.remove('active'));
      
      if (step.type === 'visit') {
        const circ = document.getElementById(`circle-${step.node}`);
        if (circ) circ.classList.add('active');
        audit.innerHTML = `[DFS VISIT] Evaluating Node <strong>${step.node}</strong> (Current parameters: &alpha;=${step.alpha === -Infinity ? '-&infin;' : step.alpha}, &beta;=${step.beta === Infinity ? '&infin;' : step.beta})`;
      } else if (step.type === 'backup') {
        const circ = document.getElementById(`circle-${step.node}`);
        if (circ) circ.classList.add('active');
        const txt = document.getElementById(`text-${step.node}`);
        if (txt) txt.textContent = step.val;
        audit.innerHTML = `[BACKUP] Propagated evaluation back to Parent Node <strong>${step.node}</strong>. Current backed up value: <strong style="color:var(--primary-color);">${step.val}</strong>`;
      } else if (step.type === 'prune') {
        // Prune the G subtree nodes and links
        const prunedNodes = ['G', 'N', 'O'];
        prunedNodes.forEach(n => {
          const c = document.getElementById(`circle-${n}`);
          const t = document.getElementById(`text-${n}`);
          if (c) c.classList.add('pruned');
          if (t) t.classList.add('pruned');
        });
        
        const prunedLinks = ['C-G', 'G-N', 'G-O'];
        prunedLinks.forEach(l => {
          const line = document.getElementById(`link-${l}`);
          if (line) line.classList.add('pruned');
        });
        
        audit.innerHTML = `<span class="status-vuln">[PRUNE] CUTOFF DETECTED!</span> At Node <strong>${step.parent}</strong>, &beta; (${step.beta}) is &le; &alpha; (${step.alpha}) at the parent level. Branch <strong>G</strong> is pruned and will not be evaluated!`;
      }
      
      index++;
    } else {
      clearInterval(aiSimInterval);
      audit.innerHTML += `<br><br><span class="status-safe">✅ GAME SOLVED:</span> Root choice resolved to move B with value <strong>5</strong>. ${isPruningEnabled ? 'Pruning saved 3 node checks.' : 'Checked all nodes.'}`;
      document.getElementById('ai-subtitle').textContent = 'Resolved Root = 5';
      aiSimState.isRunning = false;
      document.getElementById('ai-btn-play').textContent = 'Run Simulation';
    }
  }, 1000);
}

// 3. Hill Climbing physics simulator
function drawHillClimbingInitial() {
  const canvas = document.getElementById('ai-hill-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  
  ctx.fillStyle = '#05080c';
  ctx.fillRect(0, 0, w, h);
  
  // Draw curve: flat plateau in middle, local peak left, global peak right
  ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  
  for (let x = 0; x < w; x++) {
    const y = getHillElevationY(x, w, h);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  
  // Draw local peak text
  ctx.fillStyle = 'var(--warning-color)';
  ctx.font = '8px JetBrains Mono';
  ctx.fillText('Local Peak (X=100)', 70, 75);
  
  // Draw plateau
  ctx.fillStyle = 'var(--accent-purple)';
  ctx.fillText('Plateau Area', 225, 145);
  
  // Draw global peak
  ctx.fillStyle = 'var(--success-color)';
  ctx.fillText('Global Peak (X=420)', 390, 45);
  
  // Initial Agent position (X=40, y=140 area)
  const initX = 30;
  const initY = getHillElevationY(initX, w, h);
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(initX, initY, 5, 0, 2*Math.PI);
  ctx.fill();
}

function getHillElevationY(x, w, h) {
  // mathematical function defining peaks
  const localPeak = 90 * Math.exp(-Math.pow((x - 100) / 45, 2));
  const globalPeak = 140 * Math.exp(-Math.pow((x - 420) / 50, 2));
  
  // Plateau: flat at height 160
  let plateau = 0;
  if (x >= 200 && x <= 280) {
    plateau = 40; 
  } else if (x > 140 && x < 200) {
    plateau = 40 * (x - 140) / 60;
  } else if (x > 280 && x < 340) {
    plateau = 40 * (340 - x) / 60;
  }
  
  const base = h - 60 - localPeak - globalPeak - plateau;
  return base;
}

function runHillClimbingSearch() {
  const canvas = document.getElementById('ai-hill-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const mode = document.getElementById('ai-hill-mode').value;
  const audit = document.getElementById('ai-audit-log');
  
  let agentX = 30; // Starting point on the left
  let steps = 0;
  
  audit.innerHTML = `[SOLVER] Spawning climber agent at X=30... (Mode: ${mode.toUpperCase()})`;
  
  aiSimInterval = setInterval(() => {
    // Redraw curve
    ctx.fillStyle = '#05080c';
    ctx.fillRect(0, 0, w, h);
    
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = getHillElevationY(x, w, h);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    ctx.fillStyle = 'var(--warning-color)';
    ctx.fillText('Local Peak (X=100)', 70, 75);
    ctx.fillStyle = 'var(--accent-purple)';
    ctx.fillText('Plateau Area', 225, 145);
    ctx.fillStyle = 'var(--success-color)';
    ctx.fillText('Global Peak (X=420)', 390, 45);
    
    // Draw past trace path
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    for (let x = 30; x <= agentX; x++) {
      const y = getHillElevationY(x, w, h);
      if (x === 30) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Local Search calculation
    const currY = getHillElevationY(agentX, w, h);
    
    // Neighbor analysis
    let nextX = agentX;
    
    if (mode === 'simple') {
      // Check left/right. First check right (step size 3)
      const stepRightY = getHillElevationY(agentX + 3, w, h);
      const stepLeftY = getHillElevationY(agentX - 3, w, h);
      
      // Remember Y is downward screen coordinates, so smaller Y means higher elevation!
      if (stepRightY < currY) {
        nextX = agentX + 3;
      } else if (stepLeftY < currY) {
        nextX = agentX - 3;
      }
    } else if (mode === 'steepest') {
      const stepRightY = getHillElevationY(agentX + 4, w, h);
      const stepLeftY = getHillElevationY(agentX - 4, w, h);
      
      // Choose best direction
      const rightImprove = currY - stepRightY;
      const leftImprove = currY - stepLeftY;
      
      if (rightImprove > 0 || leftImprove > 0) {
        if (rightImprove >= leftImprove) {
          nextX = agentX + 4;
        } else {
          nextX = agentX - 4;
        }
      }
    }
    
    // Draw Climber agent
    const agentY = getHillElevationY(agentX, w, h);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(agentX, agentY, 5, 0, 2*Math.PI);
    ctx.fill();
    
    if (nextX === agentX) {
      // Stuck! No improvement neighbors.
      clearInterval(aiSimInterval);
      
      if (Math.abs(agentX - 100) < 5) {
        audit.innerHTML = `<span class="status-vuln">⚠️ TRAPPED IN LOCAL MAXIMA:</span> The climber stopped at X=${Math.round(agentX)} (elevation: ${Math.round(h - agentY)}). All surrounding steps lead downward, but this peak is lower than the Global Peak!`;
        document.getElementById('ai-subtitle').textContent = 'Trapped: Local Maxima';
      } else if (agentX >= 180 && agentX <= 285) {
        audit.innerHTML = `<span class="status-vuln">⚠️ STALLED ON PLATEAU:</span> The climber halted in the flat plateau zone (X=${Math.round(agentX)}). All local neighbors have the same height; gradient is zero.`;
        document.getElementById('ai-subtitle').textContent = 'Stalled: Plateau';
      } else if (Math.abs(agentX - 420) < 10) {
        audit.innerHTML = `<span class="status-safe">✅ SUCCESS:</span> The climber reached the global maximum peak at X=${Math.round(agentX)} (elevation: ${Math.round(h - agentY)})!`;
        document.getElementById('ai-subtitle').textContent = 'Peak achieved!';
      } else {
        audit.innerHTML = `Climber stopped at X=${Math.round(agentX)}.`;
      }
      
      aiSimState.isRunning = false;
      document.getElementById('ai-btn-play').textContent = 'Run Simulation';
    } else {
      agentX = nextX;
      steps++;
      audit.textContent = `[CLIMBING] Stepping along slope. Current coordinate: X=${Math.round(agentX)}, Height=${Math.round(h - agentY)}`;
    }
  }, 100);
}

// ==========================================
// SUBJECT SWITCHER CONTROLLER
// ==========================================
function initSubjectSwitcher() {
  const subjectSelect = document.getElementById('subject-select');
  const cprogramsNavBtn = document.getElementById('nav-cprograms');
  
  subjectSelect.addEventListener('change', (e) => {
    activeSubject = e.target.value;
    
    // Toggle slidesData pointer
    if (activeSubject === 'cg') {
      slidesData = slidesDataCG;
      flashcardsData = flashcardsDataCG;
      cprogramsNavBtn.classList.remove('hidden');
      
      document.getElementById('cg-visualizer-container').classList.remove('hidden');
      document.getElementById('cs-visualizer-container').classList.add('hidden');
      document.getElementById('ai-visualizer-container').classList.add('hidden');
    } else if (activeSubject === 'cs') {
      slidesData = slidesDataCS;
      flashcardsData = flashcardsDataCS;
      cprogramsNavBtn.classList.add('hidden');
      
      const activeNavTab = document.querySelector('.nav-btn.active');
      if (activeNavTab && activeNavTab.getAttribute('data-tab') === 'cprograms') {
        document.getElementById('nav-slides').click();
      }
      
      document.getElementById('cg-visualizer-container').classList.add('hidden');
      document.getElementById('cs-visualizer-container').classList.remove('hidden');
      document.getElementById('ai-visualizer-container').classList.add('hidden');
    } else if (activeSubject === 'ai') {
      slidesData = slidesDataAI;
      flashcardsData = flashcardsDataAI;
      cprogramsNavBtn.classList.add('hidden');
      
      const activeNavTab = document.querySelector('.nav-btn.active');
      if (activeNavTab && activeNavTab.getAttribute('data-tab') === 'cprograms') {
        document.getElementById('nav-slides').click();
      }
      
      document.getElementById('cg-visualizer-container').classList.add('hidden');
      document.getElementById('cs-visualizer-container').classList.add('hidden');
      document.getElementById('ai-visualizer-container').classList.remove('hidden');
    }
    
    // Refresh slideshow list and load first slide
    initSlideshow();
    
    // Refresh flashcards progress and index
    activeCardIdx = 0;
    initFlashcards();
    
    // Refresh study guide contents
    if (window.refreshStudyGuide) {
      window.refreshStudyGuide();
    }
    
    // Trigger resize for layout rendering yokes
    window.dispatchEvent(new Event('resize'));
  });
}

// ==========================================
// MAIN INITIALIZATION ON DOM LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initTabs();
  initSubjectSwitcher(); // Register course selection listener
  initSlideshow();
  initFlashcards();
  initVisualizer();
  initCPrograms();
  initCsThreatSimulators(); // Register cyber security visualizer simulations
  initStudyGuide(); // Register study guide textbook renderer
  initAiSimulators(); // Register artificial intelligence visualizer simulations
});



