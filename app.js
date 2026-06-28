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
const slidesData = [
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
const flashcardsData = [
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
  const storedStates = localStorage.getItem('cg_flashcard_states');
  if (storedStates) {
    cardStates = JSON.parse(storedStates);
  } else {
    cardStates = flashcardsData.map(() => 'unstudied');
  }
  
  totalCountEl.textContent = flashcardsData.length;
  
  // Flip handler
  flashcardWrapper.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    // Enable state buttons once flipped
    if (flashcard.classList.contains('flipped')) {
      masterBtn.disabled = false;
      reviewBtn.disabled = false;
    }
  });
  
  function updateUI() {
    // Reset flip status
    flashcard.classList.remove('flipped');
    masterBtn.disabled = true;
    reviewBtn.disabled = true;
    
    // Load content
    const cardData = flashcardsData[activeCardIdx];
    catFront.textContent = cardData.category;
    catBack.textContent = `${cardData.category} - Answer`;
    questionEl.innerHTML = cardData.question;
    answerEl.innerHTML = cardData.answer;
    
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
    // Radius = 50, Circumference = 2 * PI * 50 = 314.15
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
    
    localStorage.setItem('cg_flashcard_states', JSON.stringify(cardStates));
  }
  
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
// MAIN INITIALIZATION ON DOM LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initTabs();
  initSlideshow();
  initFlashcards();
  initVisualizer();
});
