console.clear();

const DELAY = 5,
STP = 273,
ELEMENT_MODAL_DATA = {
  Hydrogen: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Hydrogen</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>H</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>1</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>1.008 (conventional)</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>1</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Reactive non-metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>1s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>13.99 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>20.271 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>-1, +1 (an amphoteric oxide)</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.20</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1312.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>31±5 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>120 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.1805 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−3.98·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in 1766 by Henry Cavendish (named by Antoine Lavoisier in 1783)</span>" },

  Helium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Helium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>He</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>2</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>4.0026</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>1</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>1s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>0.95 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4.22 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>—</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 2372.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>28 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>140 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.1513 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in 1868 by Pierre Janssen (independently by Norman Lockyer)</span>" },

  Lithium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Lithium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Li</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>3</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>6.94</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>453.65 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1603 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.98</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 520.2 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>128 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>182 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>84.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+13.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in 1817 by Johan August Arfwedson</span>" },

  Beryllium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Beryllium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Be</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>4</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>9.0122</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1560.15 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2742 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.57</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 899.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>96 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>153 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>190 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+4.9·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in 1798 by Louis Nicolas Vauquelin</span>" },

  Boron: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Boron</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>B</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>5</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>10.81</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2349 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4200 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.04</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 800.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>84 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>192 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>27.4 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in ancient times, isolated in 1808 by Sir Humphry Davy and Joseph Louis Gay-Lussac</span>" },

  Carbon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Carbon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>C</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>6</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>12.011</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Non-metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>sublimation point: 3915 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>sublimation</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +3, +2, +1, −1, −2, −3, −4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.55</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1086.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>77 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>170 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>140 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.1·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Nitrogen: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Nitrogen</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>N</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>7</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>14.007</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Non-metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>63.15 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>77.36 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +4, +3, +2, +1, −1, −2, −3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>3.04</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1402.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>75 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>155 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.02583 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−3.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered in 1772 by Daniel Rutherford</span>" },

  Oxygen: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Oxygen</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>O</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>8</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>15.999</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Non-metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>54.36 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>90.20 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>3.44</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1313.9 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>73 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>152 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.02583 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−4.3·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Fluorine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Fluorine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>F</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>9</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>18.998</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>53.48 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>85.03 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>3.98</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1681.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>71 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>147 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.02591 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−1.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Isolated by Henri Moissan in 1886</span>" },

  Neon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Neon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ne</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>10</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>20.180</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>2</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[He] 2s<sup>2</sup> 2p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>24.56 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>27.07 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>—</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 2080.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>69 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>154 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.049 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Sir William Ramsay and Morris Travers in 1898</span>" },

  Sodium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Sodium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Na</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>11</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>22.990</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>370.87 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1156 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.93</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 495.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>154 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>227 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>142 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>6.3·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Magnesium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Magnesium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Mg</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>12</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>24.305</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>923 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1380 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.31</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 737.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>141 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>173 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>156 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>3.9·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Isolated by Sir Humphry Davy in 1808</span>" },

  Aluminum: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Aluminum</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Al</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>13</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>26.982</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>933.47 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2792 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.61</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 577.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>121 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>184 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>237 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>1.5·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Silicon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Silicon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Si</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>14</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>28.085</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1687 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3538 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +2, -4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.90</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 786.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>111 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>210 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>diamond cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>149 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>nonmagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Isolated by Jöns Jacob Berzelius in 1823</span>" },

  Phosphorus: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Phosphorus</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>P</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>15</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>30.974</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Nonmetal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>317.25 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>553.65 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +3, -3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.19</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1011.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>107 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>180 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>simple triclinic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.236 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Hennig Brand in 1669</span>" },

  Sulfur: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Sulfur</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>S</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>16</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>32.06</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Nonmetal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>388.36 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>717.87 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6, +4, -2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.58</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 999.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>102 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>180 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.205 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Chlorine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Chlorine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cl</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>17</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>35.45</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>171.6 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>239.11 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+7, +5, +3, +1, -1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>3.16</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1251.2 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>99 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>175 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.0089 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>antiferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−37.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Wilhelm Scheele in 1774</span>" },

  Argon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Argon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ar</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>18</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>39.948</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>3</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ne] 3s<sup>2</sup> 3p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>83.8 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>87.3 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>—</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1520.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>71 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>188 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.0177 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Lord Rayleigh and Sir William Ramsay in 1894</span>" },

  Potassium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Potassium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>K</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>19</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>39.098</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 4s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 8, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>336.53 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1032 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.82</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 418.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>203 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>275 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>102.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>5.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Sir Humphry Davy in 1807</span>" },

  Calcium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Calcium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ca</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>20</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>40.078</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1115 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1757 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.00</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 589.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>176 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>231 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>201 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Sir Humphry Davy in 1808</span>" },

  Scandium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Scandium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sc</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>21</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>44.956</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>1</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1814 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3109 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.36</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 633.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>170 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>15.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Lars Fredrik Nilson in 1879</span>" },

  Titanium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Titanium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ti</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>22</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>47.867</span>",
    group: "<span class='title'>Group:</span> <span class='content'>4</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>2</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 10, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1941 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3560 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.54</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 658.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>160 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>187 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>22.0 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by William Gregor in 1791</span>" },

  Vanadium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Vanadium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>V</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>23</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>50.942</span>",
    group: "<span class='title'>Group:</span> <span class='content'>5</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>3</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 11, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2183 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3680 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +4, +3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.63</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 650.9 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>153 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>30.7 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>antiferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>—</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Andrés Manuel del Río in 1801</span>" },

  Chromium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Chromium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>24</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>51.996</span>",
    group: "<span class='title'>Group:</span> <span class='content'>6</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>5</sup> 4s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 13, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2180 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2944 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6, +3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.66</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 652.9 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>166 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>93.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>antiferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>1.1·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Louis Nicolas Vauquelin in 1797</span>" },

  Manganese: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Manganese</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Mn</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>25</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>54.938</span>",
    group: "<span class='title'>Group:</span> <span class='content'>7</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>5</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 13, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1519 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2334 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+7, +4, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.55</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 717.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>139 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>7.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>2.1·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Torbern Olof Bergman in 1774</span>" },

  Iron: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Iron</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Fe</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>26</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>55.845</span>",
    group: "<span class='title'>Group:</span> <span class='content'>8</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>6</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 14, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1811 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3134 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.83</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 762.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>132 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>194 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>80.4 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>ferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>1.7·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Cobalt: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Cobalt</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Co</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>27</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>58.933</span>",
    group: "<span class='title'>Group:</span> <span class='content'>9</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>7</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 15, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1768 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3200 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.88</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 760.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>126 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>100 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>ferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>2.3·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Georg Brandt in 1735</span>" },

  Nickel: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Nickel</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ni</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>28</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>58.693</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>10</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>8</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 16, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1728 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3186 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.91</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 737.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>121 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>—</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>90.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>ferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>5.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Copper: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Copper</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cu</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>29</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>63.546</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>11</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>9</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1357.8 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2835 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +1 (a mild oxidizing agent)</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 745.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>138 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>140 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>398 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Zinc: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Zinc</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Zn</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>30</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>65.38</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>12</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>692.68 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1180 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.65</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 906.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>131 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>139 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>116 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−1.2·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Gallium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Gallium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ga</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>31</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>69.723</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>302.9146 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2477 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.81</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 578.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>122 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>187 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>29.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Lecoq de Boisbaudran in 1875</span>" },

  Germanium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Germanium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ge</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>32</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>72.630</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1211.4 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3106 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.01</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 762.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>122 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>211 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>diamond cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>60.2 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−1.4·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Clemens Winkler in 1886</span>" },

  Arsenic: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Arsenic</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>As</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>33</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>74.922</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1090 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>887 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +3, −3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.18</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 947.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>119 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>185 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>50.2 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−2.4·10−5 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Selenium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Selenium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Se</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>34</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>78.971</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Non-metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>494 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>958 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6, +4, −2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.55</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 941.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>120 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>190 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.523 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−6.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Jöns Jakob Berzelius in 1817</span>" },

  Bromine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Bromine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Br</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>35</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>79.904</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Liquid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>265.8 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>332.0 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +4, +3, +1, −1, −5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.96</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1139.9 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>120 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>185 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.122 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−1.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Antoine Jérôme Balard in 1826</span>" },

  Krypton: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Krypton</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Kr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>36</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>83.798</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>4</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>115.78 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>119.93 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>3.00</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1350.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>110 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>202 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>cubic face-centered</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.00943 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>0</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Sir William Ramsay and Morris Travers in 1898</span>" },

  Rubidium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Rubidium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Rb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>37</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>85.468</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 8, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>312.45 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>961 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.82</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 403.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>211 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>303 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>58.2 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+1.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Robert Bunsen and Gustav Kirchhoff in 1861</span>" },

  Strontium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Strontium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>38</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>87.62</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1050 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1650 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.95</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 549.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>195 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>249 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>35.3 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+1.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Adair Crawford and William Cruickshank in 1790</span>" },

  Yttrium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Yttrium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Y</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>39</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>88.906</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1799 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3609 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.22</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 600.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>180 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>212 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>17.2 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+1.9·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Johan Gadolin in 1794</span>" },

  Zirconium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Zirconium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Zr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>40</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>91.224</span>",
    group: "<span class='title'>Group:</span> <span class='content'>4</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 10, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2128 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4682 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.33</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 640.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>155 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>22.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+3.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Martin Heinrich Klaproth in 1789</span>" },

  Niobium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Niobium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Nb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>41</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>92.906</span>",
    group: "<span class='title'>Group:</span> <span class='content'>5</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 12, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2741 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5017 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.6</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 652.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>164 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>207 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>53.7 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+3.3·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Named after Niobe, the daughter of Tantalus, in Greek mythology</span>" },

  Molybdenum: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Molybdenum</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Mo</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>42</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>95.95</span>",
    group: "<span class='title'>Group:</span> <span class='content'>6</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 13, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2896 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4912 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6, +5, +4, +3, +2, +1, -1, -2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.16</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 684.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>154 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>209 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>138 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+4.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known to the ancient Greeks, but isolated in 1781 by Peter Jacob Hjelm</span>" },

  Technetium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Technetium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Tc</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>43</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>98</span>",
    group: "<span class='title'>Group:</span> <span class='content'>7</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 13, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2430 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4538 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+7, +6, +5, +4, +3, +2, +1, -1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 702 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>147 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>50.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>ferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+99.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Artificially produced, first isolated by Carlo Perrier and Emilio Segrè in 1937</span>" },

  Ruthenium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Ruthenium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ru</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>44</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>101.07</span>",
    group: "<span class='title'>Group:</span> <span class='content'>8</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>7</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 15, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2607 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4423 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4, +7, +8</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 710.2 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>146 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>120 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+8.4·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Karl Ernst Claus in 1844</span>" },

  Rhodium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Rhodium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Rh</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>45</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>102.91</span>",
    group: "<span class='title'>Group:</span> <span class='content'>9</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>8</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 16, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2237 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3968 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2, +1, -1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.28</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 719.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>142 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>150 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+4.3·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by William Hyde Wollaston in 1803</span>" },

  Palladium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Palladium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pd</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>46</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>106.42</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>10</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>0</sup> 4d<sup>10</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 0</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1828 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3236 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +2, 0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 804.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>139 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>163 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>71.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+5.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by William Hyde Wollaston in 1803</span>" },

  Silver: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Silver</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ag</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>47</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>107.87</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>11</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>1</sup> 4d<sup>10</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1234 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2435 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.93</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 731 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>145 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>172 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>429 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>-19.5·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Cadmium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Cadmium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cd</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>48</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>112.41</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>12</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>594.22 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1040 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.69</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 867.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>148 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>158 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>96.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>+4.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Karl Samuel Leberecht Hermann and Friedrich Stromeyer in 1817</span>" },

  Indium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Indium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>In</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>49</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>114.82</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>429.75 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2345 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.78</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 558.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>142 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>193 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>tetragonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>81.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−76.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Ferdinand Reich and Hieronymous Theodor Richter in 1863</span>" },

  Tin: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Tin</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sn</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>50</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>118.71</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>505.08 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2875 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.96</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 708.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>141 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>217 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>tetragonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>66.8 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−33.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Antimony: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Antimony</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>51</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>121.76</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>903.78 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1860 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +3, -3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.05</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 834 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>138 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>206 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>24.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−61.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Tellurium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Tellurium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Te</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>52</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>127.60</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>722.66 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1261 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6, +4, -2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.1</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 869 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>138 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>206 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>2.35 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Franz-Joseph Müller von Reichenstein in 1782</span>" },

  Iodine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Iodine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>I</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>53</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>126.90</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>386.85 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>457.4 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+7, +5, +1, -1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.66</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1008.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>139 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>198 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.449 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−27.4·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Bernard Courtois in 1811</span>" },

  Xenon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Xenon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Xe</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>54</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>131.29</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>5</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>161.4 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>165.0 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +4, +6, +8</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.60</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1170.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>140 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>216 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>0.00565 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>0.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Sir William Ramsay and Morris Travers in 1898</span>" },

  Cesium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Cesium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cs</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>55</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>132.91</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 6s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 8, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>301.59 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>944 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.79</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 375.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>244 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>35.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>68.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Robert Bunsen and Gustav Kirchhoff in 1860</span>" },

  Barium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Barium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ba</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>56</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>137.33</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1000 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2170 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.89</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 502.9 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>215 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>18.4 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−25.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Wilhelm Scheele in 1772</span>" },

  Lanthanum: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Lanthanum</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>La</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>57</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>138.91</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 5d<sup>1</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 18, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1193 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3737 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.10</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 538.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>207 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>13.4 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−46.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Gustaf Mosander in 1839</span>" },

  Cerium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Cerium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ce</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>58</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>140.12</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>1</sup> 5d<sup>1</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 19, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1068 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3716 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.12</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 534.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>204 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>11.3 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−32.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Martin Heinrich Klaproth and Jöns Jakob Berzelius in 1803</span>" },

  Praseodymium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Praseodymium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>59</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>140.91</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>3</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 21, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1208 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3793 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.13</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 527.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>203 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>double hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>12.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−16.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Auer von Welsbach in 1885</span>" },

  Neodymium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Neodymium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Nd</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>60</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>144.24</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>4</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 22, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1297 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3347 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.14</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 533.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>201 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>double hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>16.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.5·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Auer von Welsbach in 1885</span>" },

  Promethium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Promethium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pm</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>61</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>145</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>5</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 23, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1315 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3273 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.13</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 540 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>none</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>12.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−9.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell in 1945</span>" },

  Samarium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Samarium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sm</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>62</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>150.36</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>6</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 24, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1345 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2067 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.17</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 544.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>198 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>13.3 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>antiferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−44.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Lecoq de Boisbaudran in 1879</span>" },

  Europium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Europium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Eu</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>63</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>151.97</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>7</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 25, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1099 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1802 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 547.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>198 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>13.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−27.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Eugène-Anatole Demarçay in 1901</span>" },

  Gadolinium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Gadolinium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Gd</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>64</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>157.25</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>7</sup> 5d<sup>1</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 25, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1585 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3546 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 593.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>180 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>10.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−40.5·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Jean Charles Galissard de Marignac in 1880</span>" },

  Terbium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Terbium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Tb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>65</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>158.93</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>9</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 27, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1629 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3503 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 565.8 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>176 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>11.1 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Gustaf Mosander in 1843</span>" },

  Dysprosium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Dysprosium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Dy</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>66</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>162.50</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>10</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 28, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1680 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2840 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.22</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 573.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>170 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>10.7 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−15.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Paul Émile Lecoq de Boisbaudran in 1886</span>" },

  Holmium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Holmium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ho</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>67</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>164.93</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>11</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 29, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1734 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2993 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.23</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 581.0 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>176 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>16.2 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.3·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Per Teodor Cleve in 1879</span>" },

  Erbium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Erbium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Er</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>68</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>167.26</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>12</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 30, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1802 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3141 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.24</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 589.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>175 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>14.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Gustaf Mosander in 1843</span>" },

  Thulium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Thulium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Tm</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>69</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>168.93</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>13</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 31, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1818 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2223 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.25</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 596.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>172 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>16.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−16.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Per Teodor Cleve in 1879</span>" },

  Ytterbium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Ytterbium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Yb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>70</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>173.04</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1097 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1469 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.1</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 603.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>None</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>38.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−35.1·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Jean Charles Galissard de Marignac in 1878</span>" },

  Lutetium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Lutetium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Lu</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>71</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>174.97</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Lanthanide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>1</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1925 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3675 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.27</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 523.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>None</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>16.4 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−8.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Auer von Welsbach in 1903</span>" },

  Hafnium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Hafnium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Hf</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>72</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>178.49</span>",
    group: "<span class='title'>Group:</span> <span class='content'>4</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>2</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 10, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2506 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4876 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 658.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>155 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>23.0 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−17.1·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Dirk Coster and Georg von Hevesy in 1923</span>" },

  Tantalum: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Tantalum</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ta</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>73</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>180.95</span>",
    group: "<span class='title'>Group:</span> <span class='content'>5</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>3</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 11, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>3290 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5731 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−1, +1, +3, +4, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.5</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 761 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>138 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>200 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>57.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−1.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Anders Gustaf Ekeberg in 1802</span>" },

  Tungsten: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Tungsten</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>W</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>74</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>183.84</span>",
    group: "<span class='title'>Group:</span> <span class='content'>6</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>4</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 12, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>3695 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>6203 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−2, -1, +1, +2, +3, +4, +5, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.36</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 770 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>139 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>210 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>170 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Carl Wilhelm Scheele in 1781</span>" },

  Rhenium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Rhenium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Re</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>75</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>186.21</span>",
    group: "<span class='title'>Group:</span> <span class='content'>7</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>5</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 13, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>3459 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5869 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−3, -1, +1, +2, +3, +4, +5, +6, +7</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 760 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>137 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>47.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>antiferromagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−17.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Masataka Ogawa in 1908</span>" },

  Osmium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Osmium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Os</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>76</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>190.23</span>",
    group: "<span class='title'>Group:</span> <span class='content'>8</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>6</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 14, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>3306 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5285 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−2, -1, +1, +2, +3, +4, +5, +6, +7, +8</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 840 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>130 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>nan</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>87.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−14.6·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Smithson Tennant in 1803</span>" },

  Iridium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Iridium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ir</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>77</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>192.22</span>",
    group: "<span class='title'>Group:</span> <span class='content'>9</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>7</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 15, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2719 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4701 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−3, -1, +1, +2, +3, +4, +5, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.20</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 880 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>135 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>202 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>147 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.7·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Smithson Tennant in 1803</span>" },

  Platinum: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Platinum</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pt</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>78</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>195.08</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>10</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>9</sup> 6s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 17, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2041 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4098 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>2, 4, 5, 6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.28</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 870 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>136 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>no data</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>71.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−3.1·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Used by pre-Columbian Americans</span>" },

  Gold: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Gold</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Au</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>79</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>196.97</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>11</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1337.33 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3129 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−1, +1, +2, +3, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.54</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 890 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>144 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>166 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>315 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−5.86·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since prehistoric times</span>" },

  Mercury: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Mercury</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Hg</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>80</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>200.59</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>12</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Liquid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>234.32 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>629.88 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1, +2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.00</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1007.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>149 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>155 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>8.30 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−2.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Thallium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Thallium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Tl</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>81</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>204.38</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>577 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1746 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.62</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 589.4 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>145 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>196 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>46.1 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−0.20·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by William Crookes in 1861</span>" },

  Lead: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Lead</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pb</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>82</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>207.2</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>600.61 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2022 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.87</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 715.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>146 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>202 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>35.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−19.0·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Bismuth: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Bismuth</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Bi</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>83</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>208.98</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>544.55 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1837 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.02</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 703 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>148 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>207 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>7.97 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−16.2·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Known since ancient times</span>" },

  Polonium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Polonium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Po</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>84</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>209</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Metalloid</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>527 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1235 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +4, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.00</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 812.1 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>140 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>197 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>rhombohedral</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>20 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>diamagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>−34.8·10−6 cm<sup>3</sup>/mol</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Marie Curie and Pierre Curie in 1898</span>" },

  Astatine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Astatine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>At</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>85</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>210</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>575 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>610 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>−1, +1, +3, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 919 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>150 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>202 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè in 1940</span>" },

  Radon: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Radon</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Rn</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>86</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>222</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>6</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Gas</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>202 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>211.5 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>2.2</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1037 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>150 pm</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>220 pm</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>3.61 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Friedrich Ernst Dorn in 1900</span>" },

  Francium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Francium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Fr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>87</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>223</span>",
    group: "<span class='title'>Group:</span> <span class='content'>1</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkali metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 7s<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 8, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>300 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>950 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.7</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 380 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Marguerite Perey in 1939</span>" },

  Radium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Radium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ra</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>88</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>226</span>",
    group: "<span class='title'>Group:</span> <span class='content'>2</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Alkaline earth metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>s-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1413 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>1413 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 509.3 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>18.6 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>nonmagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Marie Curie and Pierre Curie in 1898</span>" },

  Actinium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Actinium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ac</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>89</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>227</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1500 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3503 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.1</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 499 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>12 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Friedrich Oskar Giesel in 1902</span>" },

  Thorium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Thorium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Th</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>90</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>232.0377</span>",
    group: "<span class='title'>Group:</span> <span class='content'>4</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 6d<sup>2</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 18, 10, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2115 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5061 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 587 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>face-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>54.0 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Jöns Jakob Berzelius in 1828</span>" },

  Protactinium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Protactinium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pa</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>91</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>231.03588</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>2</sup> 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 20, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1841 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4300 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.5</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 568 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>body-centered cubic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>47.9 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by William Crookes in 1913</span>" },

  Uranium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Uranium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>U</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>92</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>238.02891</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>3</sup> 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 21, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1405.3 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4404 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4, +5, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.38</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 597.6 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>27.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Martin Heinrich Klaproth in 1789</span>" },

  Neptunium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Neptunium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Np</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>93</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>237</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>4</sup> 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 22, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>917 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>4273 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4, +5, +6, +7</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.36</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 604.5 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>6.3 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Edwin McMillan and Philip H. Abelson in 1940</span>" },

  Plutonium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Plutonium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Pu</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>94</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>244</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>6</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 24, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>912 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>3505 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4, +5, +6, +7</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.28</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 584.7 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>monoclinic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>6.74 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso in 1940</span>" },

  Americium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Americium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Am</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>95</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>243</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>7</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 25, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1449 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>2880 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3, +4, +5, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 578 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>10 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso in 1944</span>" },

  Curium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Curium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cm</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>96</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>247</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>7</sup> 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 25, 9, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1613 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 581 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>double hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>13.3 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso in 1944</span>" },

  Berkelium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Berkelium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Bk</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>97</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>247</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>9</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 27, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1259 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 601 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>orthorhombic</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>10.5 W/(m·K)</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>paramagnetic</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso in 1949</span>" },

  Californium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Californium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cf</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>98</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>251</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>10</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 28, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1173 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 608 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and Torbjørn Sikkeland in 1950</span>" },

  Einsteinium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Einsteinium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Es</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>99</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>252</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>11</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 29, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1133 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 619 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>hexagonal close-packed</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and Gregory R. Choppin in 1952</span>" },

  Fermium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Fermium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Fm</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>100</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>257</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>12</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 30, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1800 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 627 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and Stanley G. Thompson in 1952</span>" },

  Mendelevium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Mendelevium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Md</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>101</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>258</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>13</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 31, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1100 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 635 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and M. Albert in 1955</span>" },

  Nobelium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Nobelium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>No</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>102</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>259</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Actinide</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>f-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 8, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1100 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 642 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and Leon O. Morgan in 1957</span>" },

  Lawrencium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Lawrencium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Lr</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>103</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>262</span>",
    group: "<span class='title'>Group:</span> <span class='content'>3</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>1</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 8, 3</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>1900 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 470 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Discovered by Albert Ghiorso, Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso in 1961</span>" },

  Rutherfordium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Rutherfordium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Rf</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>104</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>267</span>",
    group: "<span class='title'>Group:</span> <span class='content'>4</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>2</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 10, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>2400 K</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>5800 K</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 580 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>Synthesized by bombarding plutonium-242 with carbon ions in 1969</span>" },

  Dubnium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Dubnium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Db</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>105</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>268</span>",
    group: "<span class='title'>Group:</span> <span class='content'>5</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>3</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 11, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 663 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) in 1968</span>" },

  Seaborgium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Seaborgium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Sg</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>106</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>271</span>",
    group: "<span class='title'>Group:</span> <span class='content'>6</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>4</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 12, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 761 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) in 1974</span>" },

  Bohrium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Bohrium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Bh</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>107</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>270</span>",
    group: "<span class='title'>Group:</span> <span class='content'>7</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>5</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 13, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+7</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 740 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) in 1976</span>" },

  Hassium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Hassium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Hs</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>108</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>277</span>",
    group: "<span class='title'>Group:</span> <span class='content'>8</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>6</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 14, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+8, +6, +4, +2, 0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 870 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the German Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung, GSI) in 1984</span>" },

  Meitnerium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Meitnerium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Mt</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>109</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>276</span>",
    group: "<span class='title'>Group:</span> <span class='content'>9</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>7</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 15, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+9, +8, +6, +4, +3, +1, -1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 800 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Gesellschaft für Schwerionenforschung (GSI) in 1982</span>" },

  Darmstadtium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Darmstadtium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ds</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>110</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>281</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>10</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>8</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 16, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+8, +6, +4, +2, 0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.1</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1100 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Gesellschaft für Schwerionenforschung (GSI) in 1994</span>" },

  Roentgenium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Roentgenium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Rg</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>111</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>280</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>11</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>9</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 17, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+5, +3, 0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1100 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Gesellschaft für Schwerionenforschung (GSI) in 1994</span>" },

  Copernicium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Copernicium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Cn</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>112</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>285</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>12</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>d-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 2</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +4</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 1150 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Gesellschaft für Schwerionenforschung (GSI) in 1996</span>" },

  Nihonium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Nihonium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Nh</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>113</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>284</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>13</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>1</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 1</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 700 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the RIKEN collaboration in 2003</span>" },

  Flerovium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Flerovium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Fl</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>114</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>289</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>14</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>2</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 4</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+4, +2, 0</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>1.3</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 760 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL) in 1998</span>" },

  Moscovium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Moscovium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Mc</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>115</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>290</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>15</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>3</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 5</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1, +3</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 800 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL) in 2003</span>" },

  Livermorium: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Livermorium</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Lv</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>116</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>293</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>16</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Post-transition metal</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>4</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 6</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+2, +4, +6</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 870 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL) in 2000</span>" },

  Tennessine: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Tennessine</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Ts</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>117</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>294</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>17</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Halogen</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>5</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 7</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1, +3, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 870 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) and Oak Ridge National Laboratory (ORNL) in 2010</span>" },

  Oganesson: {
    name:
    "<span class='title'>Element:</span> <span class='content'>Oganesson</span>",
    symbol:
    "<span class='title'>Symbol:</span> <span class='content'>Og</span>",
    "atomic-number":
    "<span class='title'>Atomic number:</span> <span class='content'>118</span>",
    "atomic-weight":
    "<span class='title'>Atomic weight:</span> <span class='content'>294</span>",
    group:
    "<span class='title'>Group:</span> <span class='content'>18</span>",
    period:
    "<span class='title'>Period:</span> <span class='content'>7</span>",
    category:
    "<span class='title'>Category:</span> <span class='content'>Noble gas</span>",
    block:
    "<span class='title'>Block:</span> <span class='content'>p-block</span>",
    "electron-configuration":
    "<span class='title'>Electron configuration:</span> <span class='content'>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>6</sup></span>",
    "electron-per-shell":
    "<span class='title'>Electrons per shell:</span> <span class='content'>2, 8, 18, 32, 32, 18, 8</span>",
    "phase-at-STP":
    "<span class='title'>Phase at STP:</span> <span class='content'>Solid</span>",
    "melting-point":
    "<span class='title'>Melting point:</span> <span class='content'>unknown</span>",
    "boiling-point":
    "<span class='title'>Boiling point:</span> <span class='content'>unknown</span>",
    "oxidation-states":
    "<span class='title'>Oxidation states:</span> <span class='content'>+1, +3, +5</span>",
    electronegativity:
    "<span class='title'>Pauling scale:</span> <span class='content'>0.9</span>",
    "ionization-energy":
    "<span class='title'>Ionization energy:</span> <span class='content'>1st: 830 kJ/mol</span>",
    "covalent-radius":
    "<span class='title'>Covalent radius:</span> <span class='content'>unknown</span>",
    "van-der-waals-radius":
    "<span class='title'>Van der Waals radius:</span> <span class='content'>unknown</span>",
    "crystal-structure":
    "<span class='title'>Crystal structure:</span> <span class='content'>unknown</span>",
    "thermal-conductivity":
    "<span class='title'>Thermal conductivity:</span> <span class='content'>unknown</span>",
    "magnetic-order":
    "<span class='title'>Magnetic order:</span> <span class='content'>unknown</span>",
    "magnetic-susceptibility":
    "<span class='title'>Magnetic susceptibility:</span> <span class='content'>unknown</span>",
    miscellaneous:
    "<span class='title'>Miscellaneous:</span> <span class='content'>First synthesized by the Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL) in 2002</span>" } };



let periodList = document.querySelectorAll(".period__item"),
groupList = document.querySelectorAll(".group__item"),
elementList = document.querySelectorAll(".element"),
legendList = document.querySelectorAll(".legend-box"),
temperatureSlider = document.querySelector(".temperature__inputs__slider"),
resetTemperatureButton = document.querySelector(".reset__temperature"),
lanthanoidBox = document.querySelector(`[data-element-name='Lanthanoids']`),
actinoidBox = document.querySelector(`[data-element-name='Actinoids']`),
modalBox = document.querySelector(".modal"),
modalContent = document.querySelector(".modal__content"),
modalProperties = document.querySelector(".modal__content__properties"),
modalClose = document.querySelector(".modal__close"),
isOpen = false,
elementClicked;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY > 0 ? true : false,
  scrollX = window.scrollX > 0 ? true : false,
  period = document.querySelector(".period__list"),
  group = document.querySelector(".group__list");

  if (scrollX) {
    addClass("--is-fixed", period, 0);
    period.style.left = `${window.scrollX}px`;
  } else {
    removeClass("--is-fixed", period, 0);
    period.style.left = 0;
  }
  if (scrollY) {
    addClass("--is-fixed", group, 0);
  } else {
    removeClass("--is-fixed", group, 0);
  }
});

modalClose.addEventListener("click", closeModal);
modalBox.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.keyCode === 27 && isOpen) {
    closeModal(event);
  }
});

actinoidBox.addEventListener("mouseenter", self => {
  const dataActinoids = self.target.getAttribute("data-element-type"),
  dataToSearch = "type";

  highlightElement(dataActinoids, dataToSearch);
});

actinoidBox.addEventListener("mouseleave", () => {
  equalizeElement();
});

lanthanoidBox.addEventListener("mouseenter", self => {
  const dataLantanoids = self.target.getAttribute("data-element-type"),
  dataToSearch = "type";

  highlightElement(dataLantanoids, dataToSearch);
});

lanthanoidBox.addEventListener("mouseleave", () => {
  equalizeElement();
});

resetTemperatureButton.addEventListener("click", () => {
  const dataToSearch = ["melting-point", "boiling-point"];

  temperatureSlider.value = STP;

  setNewTemperature(STP);
  highlightElement(STP, dataToSearch);
  removeClass("--is-visible", resetTemperatureButton, 0);
});

temperatureSlider.addEventListener("input", self => {
  const currentValue = Number(self.target.value),
  dataToSearch = ["melting-point", "boiling-point"];

  if (
  currentValue !== STP &&
  !resetTemperatureButton.classList.contains("--is-visible"))
  {
    addClass("--is-visible", resetTemperatureButton, 0);
  } else if (currentValue === STP) {
    removeClass("--is-visible", resetTemperatureButton, 0);
  }

  setNewTemperature(currentValue);
  highlightElement(currentValue, dataToSearch);
});

Array.from(elementList).forEach(elementItem => {
  elementItem.addEventListener("click", () => {
    if (isLanthanoidOrActinoid(elementItem)) {
      elementClicked = elementItem;
      elementName = elementClicked.getAttribute("data-element-name");

      modalAnimation(elementItem);
      createModalContent(elementName);
    }
  });
});

Array.from(legendList).forEach(legendItem => {
  legendItem.addEventListener("mouseenter", self => {
    let legendData, dataToSearch;

    if (legendItem.getAttribute("data-element-type")) {
      legendData = self.target.getAttribute("data-element-type");
      dataToSearch = "type";
    } else {
      legendData = self.target.getAttribute("data-element-state");
      dataToSearch = "state";
    }

    highlightElement(legendData, dataToSearch);
  });

  legendItem.addEventListener("mouseleave", () => {
    equalizeElement();
  });
});

Array.from(periodList).forEach(periodItem => {
  periodItem.addEventListener("mouseenter", self => {
    const periodNumber = Number(self.target.firstChild.innerHTML),
    dataToSearch = "period";

    highlightElement(periodNumber, dataToSearch);
  });

  periodItem.addEventListener("mouseleave", () => {
    equalizeElement();
  });
});

Array.from(groupList).forEach(groupItem => {
  groupItem.addEventListener("mouseenter", self => {
    const groupNumber = Number(self.target.firstChild.innerHTML),
    dataToSearch = "group";

    highlightElement(groupNumber, dataToSearch);
  });

  groupItem.addEventListener("mouseleave", () => {
    equalizeElement();
  });
});

function equalizeElement() {
  let index = 0;

  Array.from(elementList).forEach(elementItem => {
    removeClass("--is-active", elementItem, index);
    index++;
  });
}

function highlightElement(dataElement, dataToSearch) {
  let index = 0;

  Array.from(elementList).forEach(elementItem => {
    let dataFromElement = elementItem.getAttribute(
    `data-element-${dataToSearch}`);


    if (dataToSearch === "group" || dataToSearch === "period") {
      dataFromElement = Number(dataFromElement);
    }

    if (dataToSearch.length === 2) {
      let meltingPoint = Number(
      elementItem.getAttribute(`data-element-${dataToSearch[0]}`)),

      boilingPoint = Number(
      elementItem.getAttribute(`data-element-${dataToSearch[1]}`));


      if (!isNaN(meltingPoint) && !isNaN(boilingPoint)) {
        if (dataElement < meltingPoint) {
          elementItem.setAttribute("data-element-state", "solid");
        } else if (dataElement < boilingPoint) {
          if (isLanthanoidOrActinoid(elementItem)) {
            elementItem.setAttribute("data-element-state", "liquid");
          }
        } else {
          elementItem.setAttribute("data-element-state", "gas");
        }
      } else if (isNaN(boilingPoint)) {
        let elementState = "unknown";
        if (dataElement < meltingPoint) {
          elementState = "solid";
        }
        elementItem.setAttribute("data-element-state", elementState);
      }
    }

    if (dataElement === dataFromElement) {
      addClass("--is-active", elementItem, index);
    }

    index++;
  });
}

function createModalContent(elementName) {
  Object.keys(ELEMENT_MODAL_DATA[elementName]).forEach(
  (key) =>
  modalProperties.innerHTML += `<p class='element-property element-${key} flex-column-wrap'>${ELEMENT_MODAL_DATA[elementName][key]}</p>`);

}

function removeModalContent() {
  modalProperties.innerHTML = "";
}

function modalAnimation(self) {
  let selfProperties = self.getBoundingClientRect(),
  modalProperties = modalContent.getBoundingClientRect(),
  tooltip = self.querySelector(".tooltip"),
  translateX,
  translateY,
  scale,
  positionX = window.innerWidth / 2,
  positionY = window.innerHeight / 2;

  addClass("--is-hidden", tooltip, 0);
  addClass("--is-triggered", self, 0);
  addClass("modal__background", modalBox, 0);

  scale = modalProperties.width / 100;
  translateX = Math.round(
  positionX - selfProperties.left - selfProperties.width / 2);

  translateY = Math.round(
  positionY - selfProperties.top - selfProperties.height / 2);

  self.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

  window.requestAnimationFrame(() => {
    openModal();
  });
}

function openModal() {
  if (!isOpen) {
    const content = modalBox.querySelector(".modal__content");

    addClass("--is-visible", modalBox, 0);
    addClass("--is-visible", content, 75);

    content.addEventListener("transitionend", hideContent(content), false);

    isOpen = true;
  }
}

function hideContent(content) {
  content.removeEventListener("transitionend", hideContent, false);
}

function closeModal(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  const target = event.target,
  tooltip = elementClicked.querySelector(".tooltip");

  if (
  isOpen && target.classList.contains("modal__background") ||
  target.classList.contains("modal__close") ||
  event.keyCode === 27)
  {
    removeClass("--is-visible", modalBox, 0);
    removeClass("--is-visible", modalContent, 0);

    elementClicked.removeAttribute("style");

    removeClass("--is-triggered", elementClicked, 0);
    removeClass("modal__background", modalBox, 0);
    removeClass("--is-hidden", tooltip, 0);

    removeModalContent();

    elementClicked = "";
    isOpen = false;
  }
}

function setNewTemperature(currentValue) {
  const kelvinOutput = document.querySelector(".temperature__inputs__result"),
  celsiusOutput = document.querySelector(".celsius"),
  farenheitOutput = document.querySelector(".farenheit");

  kelvinOutput.innerHTML = `${currentValue} K`;
  celsiusOutput.innerHTML = `${currentValue - 273}ºC`;
  farenheitOutput.innerHTML = `${
  Math.round((currentValue * 9 / 5 - 460) * 100) / 100
  }ºF`;
}

function addClass(className, element, index) {
  setTimeout(() => {
    element.classList.add(className);
  }, index * DELAY);
}

function removeClass(className, element, index) {
  setTimeout(() => {
    element.classList.remove(className);
  }, index * DELAY);
}

function isLanthanoidOrActinoid(elementItem) {
  return (
    elementItem.getAttribute("data-element-name") !== "Lanthanoids" &&
    elementItem.getAttribute("data-element-name") !== "Actinoids");

}