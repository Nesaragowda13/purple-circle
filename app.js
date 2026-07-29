/* ==========================================================================
   NAMMA PURPLE'S INDO-ITALIAN ADDA - APPLICATION SCRIPT
   Italian Flair; Indian Alchemy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- VINTAGE WOODCUT SVG ILLUSTRATION GENERATOR FOR ALL DISHES ---
    function getDishSVG(id) {
        switch(id) {
            case 'frittelle-di-lenticchie': // Curd Vada (Dahi Vada)
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- White Serving Plate -->
                    <ellipse cx="100" cy="115" rx="80" ry="18" fill="#d9d9d9"/>
                    <ellipse cx="100" cy="85" rx="75" ry="28" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
                    <ellipse cx="100" cy="83" rx="68" ry="22" fill="#fffdfa"/>
                    
                    <!-- Creamy Thick Dahi (Seasoned Curd Pool) -->
                    <ellipse cx="100" cy="82" rx="62" ry="18" fill="#fcf9ee"/>
                    
                    <!-- 3 Soft Soaked Lentil Vadas -->
                    <!-- Top Left Vada -->
                    <ellipse cx="70" cy="72" rx="22" ry="14" fill="#f5edd8" stroke="#d4af37" stroke-width="1"/>
                    <!-- Top Right Vada -->
                    <ellipse cx="130" cy="72" rx="22" ry="14" fill="#f5edd8" stroke="#d4af37" stroke-width="1"/>
                    <!-- Bottom Center Main Vada -->
                    <ellipse cx="100" cy="88" rx="26" ry="16" fill="#f8f0dc" stroke="#d4af37" stroke-width="1.2"/>
                    <circle cx="100" cy="88" r="4" fill="#e5cf9e"/>
                    
                    <!-- Red Chilli Powder Dusting & Cumin Flecks -->
                    <path d="M 60,68 Q 75,64 80,72" fill="none" stroke="#d93d26" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
                    <path d="M 120,68 Q 135,64 140,72" fill="none" stroke="#d93d26" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
                    <path d="M 88,84 Q 105,80 112,88" fill="none" stroke="#d93d26" stroke-width="3.5" stroke-linecap="round" opacity="0.85"/>
                    <path d="M 92,86 Q 100,92 108,86" fill="none" stroke="#a8421d" stroke-width="2.5" opacity="0.8"/>
                    
                    <circle cx="95" cy="82" r="1.5" fill="#4a2c11"/><circle cx="106" cy="92" r="1.5" fill="#4a2c11"/><circle cx="68" cy="70" r="1.5" fill="#4a2c11"/>
                    
                    <!-- Ginger Julienne Strips -->
                    <line x1="94" y1="80" x2="104" y2="88" stroke="#dfb062" stroke-width="2" stroke-linecap="round"/>
                    <line x1="102" y1="80" x2="96" y2="88" stroke="#dfb062" stroke-width="2" stroke-linecap="round"/>
                    
                    <!-- Mint Leaf Sprig in Center -->
                    <g transform="translate(100, 64)">
                        <path d="M 0,0 Q -8,-8 -12,-2 Q -8,4 0,0 Z" fill="#2b7a3e"/>
                        <path d="M 0,0 Q 8,-8 12,-2 Q 8,4 0,0 Z" fill="#388e3c"/>
                        <path d="M 0,0 Q 0,-10 -4,-12 Q 2,-10 0,0 Z" fill="#1b5e20"/>
                    </g>
                </svg>`;


            case 'bruschetta-al-pomodoro': // Bruschetta
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="115" rx="75" ry="18" fill="#d0b68e"/>
                    <!-- Crusty Bread Slices -->
                    <path d="M 40,85 C 40,65 70,55 105,70 C 120,78 120,95 95,95 C 65,95 40,95 40,85 Z" fill="#9e662b" stroke="#4a2c11" stroke-width="2"/>
                    <path d="M 45,82 C 45,68 70,60 100,72 C 112,78 112,90 92,90 C 68,90 45,90 45,82 Z" fill="#d9aa6e"/>
                    <!-- Diced Tomato & Basil Topping -->
                    <rect x="55" y="65" width="8" height="8" rx="2" fill="#bf2c2c" stroke="#4a2c11" stroke-width="1"/>
                    <rect x="68" y="68" width="9" height="9" rx="2" fill="#d93d3d" stroke="#4a2c11" stroke-width="1"/>
                    <rect x="80" y="64" width="8" height="8" rx="2" fill="#bf2c2c" stroke="#4a2c11" stroke-width="1"/>
                    <rect x="92" y="72" width="9" height="9" rx="2" fill="#d93d3d" stroke="#4a2c11" stroke-width="1"/>
                    <path d="M 62,60 Q 70,52 75,60 Q 70,68 62,60 Z" fill="#2b6e38" stroke="#1d4824"/>
                    <path d="M 85,58 Q 93,50 98,58 Q 93,66 85,58 Z" fill="#2b6e38" stroke="#1d4824"/>
                </svg>`;

            case 'sferette-croccanti-speziate': // Panipuri
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Background Terracotta Ragda Bowl -->
                    <path d="M 25,60 C 20,85 75,85 70,60 Z" fill="#b85828" stroke="#4a2c11" stroke-width="1.5"/>
                    <ellipse cx="47.5" cy="60" rx="22" ry="7" fill="#8a3c10"/>
                    <ellipse cx="47.5" cy="59" rx="20" ry="5.5" fill="#d99f38"/>
                    
                    <!-- Background Golden Puri Stack Bowl -->
                    <path d="M 130,62 C 125,85 180,85 175,62 Z" fill="#b85828" stroke="#4a2c11" stroke-width="1.5"/>
                    <circle cx="145" cy="52" r="9" fill="#e8b868" stroke="#4a2c11"/>
                    <circle cx="160" cy="50" r="9.5" fill="#dfab52" stroke="#4a2c11"/>
                    <circle cx="152" cy="42" r="8.5" fill="#f0c272" stroke="#4a2c11"/>
                    
                    <!-- Eco-Friendly Leaf Dona Bowl (Foreground Center) -->
                    <path d="M 55,75 C 50,115 145,115 140,75 Z" fill="#6d5828" stroke="#3b2b10" stroke-width="2"/>
                    <ellipse cx="97.5" cy="75" rx="42" ry="14" fill="#856c32" stroke="#3b2b10" stroke-width="1.5"/>
                    <ellipse cx="97.5" cy="73" rx="38" ry="11" fill="#4d3e1d"/>
                    
                    <!-- 3 Crispy Puri Spheres Filled with Mint Pani & Ragda -->
                    <!-- Puri 1 (Left) -->
                    <circle cx="78" cy="72" r="14" fill="#e8b868" stroke="#4a2c11" stroke-width="1.5"/>
                    <circle cx="78" cy="67" r="7" fill="#2e7d32"/>
                    <circle cx="78" cy="67" r="4" fill="#a8722a"/>
                    
                    <!-- Puri 2 (Right) -->
                    <circle cx="118" cy="72" r="14" fill="#dfab52" stroke="#4a2c11" stroke-width="1.5"/>
                    <circle cx="118" cy="67" r="7" fill="#2e7d32"/>
                    <circle cx="118" cy="67" r="4" fill="#a8722a"/>
                    
                    <!-- Puri 3 (Bottom Center) -->
                    <circle cx="98" cy="85" r="15" fill="#f0c272" stroke="#4a2c11" stroke-width="1.5"/>
                    <circle cx="98" cy="80" r="7.5" fill="#2e7d32"/>
                    <circle cx="98" cy="80" r="4.5" fill="#a8722a"/>
                </svg>`;


            case 'pasta-italiana': // Pasta Italiana
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="110" rx="75" ry="20" fill="#c4aa82"/>
                    <ellipse cx="100" cy="85" rx="70" ry="30" fill="#f4ebd9" stroke="#4a2c11" stroke-width="2"/>
                    <!-- Fettuccine Pasta Noodle Waves -->
                    <path d="M 50,85 Q 70,60 90,85 T 130,85 T 150,85" fill="none" stroke="#e0b85c" stroke-width="6" stroke-linecap="round"/>
                    <path d="M 60,75 Q 80,95 100,75 T 140,75" fill="none" stroke="#d4a644" stroke-width="5" stroke-linecap="round"/>
                    <path d="M 70,90 Q 90,65 110,90 T 150,80" fill="none" stroke="#f0ca71" stroke-width="5" stroke-linecap="round"/>
                    <!-- Rich Red Sauce & Basil -->
                    <circle cx="100" cy="78" r="18" fill="#b82e2e" opacity="0.85"/>
                    <path d="M 95,70 Q 105,60 110,70 Q 105,80 95,70 Z" fill="#2b6e38" stroke="#1d4824"/>
                </svg>`;

            case 'piadina-flatbread': // Piadina Italian Flatbread
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rustic Dark Plate -->
                    <ellipse cx="100" cy="115" rx="85" ry="18" fill="#262626"/>
                    <ellipse cx="100" cy="85" rx="80" ry="28" fill="#363636" stroke="#1f1f1f" stroke-width="2"/>
                    <ellipse cx="100" cy="83" rx="72" ry="22" fill="#2a2a2a"/>
                    
                    <!-- Folded Grilled Flatbread (Piadina) -->
                    <!-- Bottom Layer -->
                    <path d="M 30,95 C 40,55 160,50 170,80 C 140,110 50,115 30,95 Z" fill="#edd6a8" stroke="#8a5c24" stroke-width="1.5"/>
                    
                    <!-- Filling: Melted Mozzarella, Spinach, Tomato Slices -->
                    <!-- Melted Mozzarella -->
                    <path d="M 60,82 Q 100,75 140,88 Q 110,98 60,82 Z" fill="#fffdfa"/>
                    <!-- Spinach / Arugula Leaves -->
                    <path d="M 70,80 Q 80,72 85,82 Q 78,88 70,80 Z" fill="#2e7d32"/>
                    <path d="M 95,82 Q 105,74 112,85 Q 102,90 95,82 Z" fill="#388e3c"/>
                    <path d="M 120,84 Q 130,76 138,86 Q 128,92 120,84 Z" fill="#1b5e20"/>
                    <!-- Ripe Tomato Slices -->
                    <ellipse cx="80" cy="86" rx="9" ry="5" fill="#d32f2f"/>
                    <ellipse cx="110" cy="88" rx="8" ry="4.5" fill="#e53935"/>
                    <ellipse cx="130" cy="89" rx="7" ry="4" fill="#c62828"/>
                    
                    <!-- Top Folded Flatbread Half -->
                    <path d="M 28,94 C 50,60 140,52 165,70 C 130,85 70,95 28,94 Z" fill="#f5e1b8" stroke="#8a5c24" stroke-width="1.5"/>
                    
                    <!-- Charred Grill Spots -->
                    <circle cx="50" cy="88" r="2.5" fill="#5c3c12"/>
                    <circle cx="75" cy="76" r="3" fill="#4a2e0a"/>
                    <circle cx="95" cy="70" r="2.5" fill="#5c3c12"/>
                    <circle cx="120" cy="65" r="3.5" fill="#4a2e0a"/>
                    <circle cx="142" cy="68" r="2.5" fill="#5c3c12"/>
                    <circle cx="68" cy="83" r="2" fill="#4a2e0a"/>
                    <circle cx="110" cy="74" r="2.5" fill="#5c3c12"/>
                </svg>`;


            case 'risotto-al-pollo-speziato': // Biryani / Risotto Handi
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="118" rx="65" ry="15" fill="#a88b5e"/>
                    <!-- Ornate Brass Handi Pot -->
                    <path d="M 50,65 C 45,105 155,105 150,65 Z" fill="#b88328" stroke="#4a2c11" stroke-width="2.5"/>
                    <ellipse cx="100" cy="65" rx="52" ry="16" fill="#8c5e17" stroke="#4a2c11" stroke-width="2"/>
                    <!-- Spiced Biryani Rice Mound -->
                    <ellipse cx="100" cy="60" rx="46" ry="18" fill="#dfaa43"/>
                    <circle cx="85" cy="55" r="2" fill="#2c1a0e"/><circle cx="115" cy="58" r="2" fill="#2c1a0e"/>
                    <circle cx="95" cy="52" r="3" fill="#8c2817"/>
                    <!-- Star Anise & Mint -->
                    <path d="M 98,48 L 102,42 L 106,48 L 112,48 L 107,52 L 109,58 L 102,54 L 95,58 L 97,52 Z" fill="#4a2c11"/>
                    <path d="M 82,46 Q 88,40 92,46 Q 88,52 82,46 Z" fill="#2b6e38"/>
                </svg>`;

            case 'riso-freddo-allo-yogurt': // Curd Rice
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Wooden Board Base -->
                    <polygon points="15,90 145,55 185,100 55,135" fill="#d4ad7b" stroke="#7a5528" stroke-width="2"/>
                    
                    <!-- Papad / Appalam in background -->
                    <ellipse cx="65" cy="62" rx="22" ry="12" fill="#f5e1ad" stroke="#cbb06d" stroke-width="1.5"/>
                    <ellipse cx="80" cy="66" rx="20" ry="10" fill="#f7edd0" stroke="#cbb06d" stroke-width="1.5"/>
                    
                    <!-- Mango Pickle Bowl in background -->
                    <ellipse cx="145" cy="68" rx="15" ry="8" fill="#ffffff" stroke="#ccc" stroke-width="1"/>
                    <ellipse cx="145" cy="67" rx="12" ry="6" fill="#a8361d"/>
                    
                    <!-- Ceramic Curd Rice Bowl -->
                    <ellipse cx="100" cy="108" rx="60" ry="16" fill="#dedede"/>
                    <ellipse cx="100" cy="88" rx="58" ry="24" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
                    <ellipse cx="100" cy="85" rx="52" ry="18" fill="#fffdf8"/>
                    
                    <!-- Creamy White Curd Rice -->
                    <ellipse cx="100" cy="84" rx="48" ry="16" fill="#fcfbf7"/>
                    
                    <!-- Tempering: Mustard Seeds, Curry Leaves, Urad Dal -->
                    <circle cx="85" cy="80" r="1" fill="#1c1c1c"/><circle cx="95" cy="85" r="1" fill="#1c1c1c"/><circle cx="112" cy="82" r="1" fill="#1c1c1c"/>
                    <ellipse cx="90" cy="88" rx="2" ry="1" fill="#d4a359"/>
                    <ellipse cx="88" cy="82" rx="4" ry="2" fill="#388e3c" transform="rotate(25 88 82)"/>
                    <ellipse cx="115" cy="86" rx="4" ry="2" fill="#388e3c" transform="rotate(-20 115 86)"/>
                    
                    <!-- Standing Fried Red Chilli in Center -->
                    <path d="M 100,85 C 98,70 102,58 98,48" fill="none" stroke="#991b1b" stroke-width="3.5" stroke-linecap="round"/>
                </svg>`;

            case 'riso-al-mango-agro-piccante': // Mango Puliyogare
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Burlap Cloth Base -->
                    <ellipse cx="100" cy="115" rx="80" ry="18" fill="#c49a6c"/>
                    
                    <!-- Brass Kadai / Handi Bowl with Handles -->
                    <path d="M 45,68 C 40,110 160,110 155,68 Z" fill="#c49335" stroke="#4a2c11" stroke-width="2.5"/>
                    <ellipse cx="100" cy="68" rx="55" ry="18" fill="#a07422" stroke="#4a2c11" stroke-width="2"/>
                    
                    <!-- Brass Loop Handles -->
                    <path d="M 40,65 C 22,55 22,80 43,73" fill="none" stroke="#d4af37" stroke-width="3.5" stroke-linecap="round"/>
                    <path d="M 160,65 C 178,55 178,80 157,73" fill="none" stroke="#d4af37" stroke-width="3.5" stroke-linecap="round"/>
                    
                    <!-- Spiced Golden Brown Mango Puliyogare Rice -->
                    <ellipse cx="100" cy="66" rx="50" ry="15" fill="#cf8a27"/>
                    
                    <!-- Raw Mango Julienne Shreds -->
                    <line x1="85" y1="62" x2="95" y2="68" stroke="#fbc02d" stroke-width="2" stroke-linecap="round"/>
                    <line x1="110" y1="60" x2="120" y2="66" stroke="#fbc02d" stroke-width="2" stroke-linecap="round"/>
                    <line x1="95" y1="70" x2="105" y2="74" stroke="#fbc02d" stroke-width="2" stroke-linecap="round"/>
                    
                    <!-- Fried Peanuts & Byadgi Chillies -->
                    <ellipse cx="80" cy="64" rx="3.5" ry="2.5" fill="#a8421d"/>
                    <ellipse cx="120" cy="64" rx="3.5" ry="2.5" fill="#a8421d"/>
                    <ellipse cx="108" cy="72" rx="3.5" ry="2.5" fill="#a8421d"/>
                    <path d="M 70,72 Q 78,75 82,68" fill="none" stroke="#991b1b" stroke-width="2.5" stroke-linecap="round"/>
                    
                    <!-- Curry Leaves Sprig -->
                    <path d="M 100,52 Q 100,68 100,72" fill="none" stroke="#1b5e20" stroke-width="1.5"/>
                    <ellipse cx="97" cy="56" rx="3" ry="1.5" fill="#388e3c" transform="rotate(-30 97 56)"/>
                    <ellipse cx="103" cy="56" rx="3" ry="1.5" fill="#388e3c" transform="rotate(30 103 56)"/>
                    <ellipse cx="97" cy="62" rx="3" ry="1.5" fill="#388e3c" transform="rotate(-20 97 62)"/>
                    <ellipse cx="103" cy="62" rx="3" ry="1.5" fill="#388e3c" transform="rotate(20 103 62)"/>
                </svg>`;


            case 'crespelle-sottili-pollo-curry': // Neer Dosa & Chicken Curry
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Steel Thali Outer Rim -->
                    <ellipse cx="100" cy="115" rx="88" ry="20" fill="#a0a0a0"/>
                    <ellipse cx="100" cy="85" rx="84" ry="32" fill="#d9d9d9" stroke="#777" stroke-width="2"/>
                    <ellipse cx="100" cy="83" rx="78" ry="28" fill="#1b5e20"/>
                    
                    <!-- Wicker Basket Mat -->
                    <ellipse cx="95" cy="82" rx="65" ry="22" fill="#8c5828" stroke="#4a2c11" stroke-width="2"/>
                    <ellipse cx="95" cy="82" rx="58" ry="18" fill="#a87136"/>
                    
                    <!-- Paper-thin Lacy Triangular Neer Dosas -->
                    <!-- Dosa 1 (Left) -->
                    <path d="M 45,85 L 85,60 L 95,95 Z" fill="#fcfbfa" stroke="#e0e0e0" stroke-width="1"/>
                    <!-- Dosa 2 (Center) -->
                    <path d="M 70,88 L 110,62 L 120,98 Z" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
                    <!-- Dosa 3 (Right) -->
                    <path d="M 95,90 L 138,65 L 145,95 Z" fill="#fdfdfd" stroke="#e0e0e0" stroke-width="1"/>
                    
                    <!-- Fresh Curry Leaves Sprig Garnishing -->
                    <path d="M 85,75 Q 98,70 108,78" fill="none" stroke="#234216" stroke-width="1.5"/>
                    <ellipse cx="88" cy="73" rx="3" ry="1.5" fill="#388e3c" transform="rotate(-20 88 73)"/>
                    <ellipse cx="95" cy="72" rx="3" ry="1.5" fill="#388e3c" transform="rotate(20 95 72)"/>
                    <ellipse cx="102" cy="74" rx="3" ry="1.5" fill="#388e3c" transform="rotate(-15 102 74)"/>
                    
                    <!-- Chutney Katori Bowl (Top Right) -->
                    <ellipse cx="155" cy="62" rx="16" ry="8" fill="#b0b0b0" stroke="#555" stroke-width="1.5"/>
                    <ellipse cx="155" cy="60" rx="14" ry="6" fill="#66bb6a"/>
                    <circle cx="155" cy="60" r="1" fill="#1b5e20"/><circle cx="158" cy="61" r="1" fill="#1b5e20"/>
                </svg>`;


            case 'involtini-dolci-crespelle': // Sweet Neer Dosa Roll (Kayi Bella Roll)
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Round Stone Thali Base -->
                    <ellipse cx="100" cy="115" rx="88" ry="20" fill="#a0a0a0"/>
                    <ellipse cx="100" cy="85" rx="84" ry="32" fill="#c4c4c4" stroke="#888" stroke-width="2"/>
                    <ellipse cx="100" cy="83" rx="78" ry="28" fill="#1b5e20"/>
                    
                    <!-- Stacked Soft White Neer Dosa Rolls -->
                    <!-- Bottom Layer Rolls -->
                    <rect x="50" y="80" width="75" height="14" rx="7" fill="#fcfcfc" stroke="#e0e0e0" stroke-width="1"/>
                    <rect x="75" y="70" width="75" height="14" rx="7" fill="#f8f8f8" stroke="#e0e0e0" stroke-width="1"/>
                    
                    <!-- Top Layer Open Cut Roll revealing Jaggery Coconut Filling -->
                    <g transform="translate(68, 52) rotate(10)">
                        <rect x="0" y="0" width="70" height="15" rx="7.5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
                        <!-- Sliced Cross Section End -->
                        <ellipse cx="70" cy="7.5" rx="4" ry="7.5" fill="#6d4c1d"/>
                        <ellipse cx="70" cy="7.5" rx="2.5" fill="#fbc02d"/>
                        <!-- Cashew Bits inside -->
                        <circle cx="69" cy="5" r="1" fill="#fffdfa"/>
                    </g>
                    
                    <!-- Fresh Coconut & Jaggery Mound (Bottom Right) -->
                    <ellipse cx="145" cy="98" rx="14" ry="7" fill="#8d5b22"/>
                    <circle cx="142" cy="96" r="1.5" fill="#ffffff"/><circle cx="148" cy="97" r="1.5" fill="#ffffff"/><circle cx="145" cy="100" r="1.5" fill="#ffffff"/>
                    
                    <!-- Small Brass Jaggery Syrup Bowl -->
                    <ellipse cx="160" cy="75" rx="14" ry="7" fill="#c49335" stroke="#4a2c11" stroke-width="1.5"/>
                    <ellipse cx="160" cy="73" rx="12" ry="5" fill="#7a3e11"/>
                </svg>`;

            case 'composta-di-albicocche-speziata': // Qurbani Ka Meetha

                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Tablecloth & Plate with Spoons (Left Side) -->
                    <ellipse cx="38" cy="70" rx="30" ry="42" fill="#d0cfb8" stroke="#a09f88" stroke-width="1.5"/>
                    <path d="M 20,40 Q 35,55 45,75" fill="none" stroke="#777" stroke-width="3" stroke-linecap="round"/>
                    <ellipse cx="18" cy="38" rx="6" ry="10" fill="#bbb"/>
                    
                    <!-- Glass Coupe Bowl Base & Stem (Center) -->
                    <ellipse cx="110" cy="120" rx="22" ry="7" fill="rgba(200,200,200,0.5)" stroke="#a0a0a0" stroke-width="1.5"/>
                    <line x1="110" y1="95" x2="110" y2="120" stroke="#b0b0b0" stroke-width="3.5"/>
                    <path d="M 75,55 C 75,98 145,98 145,55 Z" fill="rgba(255,255,255,0.3)" stroke="#a0a0a0" stroke-width="2"/>
                    <ellipse cx="110" cy="55" rx="35" ry="11" fill="rgba(255,255,255,0.4)" stroke="#a0a0a0" stroke-width="1.5"/>
                    
                    <!-- Slow-Stewed Apricot Compote (Amber-Red Glaze) -->
                    <path d="M 77,58 C 77,93 143,93 143,58 Z" fill="#9e3011"/>
                    <ellipse cx="110" cy="58" rx="33" ry="10" fill="#bd3e17"/>
                    <ellipse cx="110" cy="57" rx="30" ry="8.5" fill="#d9541e"/>
                    
                    <!-- Blanched Apricot Kernel Nuts in Center -->
                    <ellipse cx="106" cy="57" rx="4" ry="2.5" fill="#fce4b8" transform="rotate(-15 106 57)"/>
                    <ellipse cx="114" cy="57" rx="4" ry="2.5" fill="#fce4b8" transform="rotate(15 114 57)"/>
                </svg>`;


            case 'tartufini-dolci-di-miglio': // Pearl Millet Ladoo (Sajje Ladoo)
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Brass Plate Rim Base -->
                    <ellipse cx="100" cy="115" rx="75" ry="16" fill="#c49335" stroke="#4a2c11" stroke-width="2"/>
                    <ellipse cx="100" cy="113" rx="70" ry="13" fill="#e5b450"/>
                    <ellipse cx="100" cy="112" rx="66" ry="11" fill="#a87422"/>
                    
                    <!-- Ladoo Spheres Pyramid Structure (Dark Brown Sajje Flour) -->
                    <!-- Bottom Layer Ladoos -->
                    <circle cx="68" cy="98" r="14" fill="#5c3f24" stroke="#2c1d0e" stroke-width="1.5"/>
                    <circle cx="90" cy="100" r="14.5" fill="#684729" stroke="#2c1d0e" stroke-width="1.5"/>
                    <circle cx="112" cy="100" r="14.5" fill="#5c3f24" stroke="#2c1d0e" stroke-width="1.5"/>
                    <circle cx="132" cy="98" r="14" fill="#684729" stroke="#2c1d0e" stroke-width="1.5"/>
                    
                    <!-- Middle Layer Ladoos -->
                    <circle cx="78" cy="80" r="14.5" fill="#684729" stroke="#2c1d0e" stroke-width="1.5"/>
                    <circle cx="100" cy="82" r="15" fill="#5c3f24" stroke="#2c1d0e" stroke-width="1.5"/>
                    <circle cx="122" cy="80" r="14.5" fill="#684729" stroke="#2c1d0e" stroke-width="1.5"/>
                    
                    <!-- Top Peak Ladoo -->
                    <circle cx="100" cy="62" r="15.5" fill="#684729" stroke="#2c1d0e" stroke-width="1.5"/>
                    
                    <!-- Melon Seeds & Nut Flecks Garnishing -->
                    <ellipse cx="98" cy="58" rx="2" ry="1" fill="#fffdfa" transform="rotate(30 98 58)"/>
                    <ellipse cx="104" cy="64" rx="2" ry="1" fill="#fffdfa" transform="rotate(-20 104 64)"/>
                    <ellipse cx="98" cy="78" rx="2" ry="1" fill="#fffdfa" transform="rotate(40 98 78)"/>
                    <ellipse cx="120" cy="78" rx="2" ry="1" fill="#fffdfa" transform="rotate(-15 120 78)"/>
                    <ellipse cx="88" cy="96" rx="2" ry="1" fill="#fffdfa" transform="rotate(25 88 96)"/>
                </svg>`;


            case 'indo-italian-panna-cotta': // Indo-Italian Panna Cotta
            case 'panna-cotta-spezie':
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Wooden Table & Saucer Plate -->
                    <ellipse cx="90" cy="118" rx="55" ry="14" fill="#d0d0d0" stroke="#aaa" stroke-width="1.5"/>
                    <ellipse cx="90" cy="116" rx="50" ry="11" fill="#e8e8e8"/>
                    
                    <!-- Glass Tumbler Container -->
                    <path d="M 55,50 L 58,110 C 58,116 122,116 122,110 L 125,50 Z" fill="rgba(255,255,255,0.25)" stroke="#b0c4de" stroke-width="2"/>
                    
                    <!-- Layer 1: Golden-Brown Jaggery Base (Bottom) -->
                    <path d="M 58,95 C 58,114 122,114 122,95 L 123,108 C 122,116 58,116 58,108 Z" fill="#8c5828"/>
                    <ellipse cx="90" cy="95" rx="31" ry="8" fill="#a87136"/>
                    
                    <!-- Layer 2: Creamy White Panna Cotta -->
                    <path d="M 57,80 L 58,95 C 58,100 122,100 122,95 L 123,80 Z" fill="#fcfcfc"/>
                    <ellipse cx="90" cy="80" rx="32.5" ry="8.5" fill="#ffffff"/>
                    
                    <!-- Layer 3: Spiced Jaggery Layer -->
                    <path d="M 56,65 L 57,80 C 57,85 123,85 123,80 L 124,65 Z" fill="#a87136"/>
                    <ellipse cx="90" cy="65" rx="33.5" ry="9" fill="#bf8547"/>
                    
                    <!-- Layer 4: Top White Panna Cotta Surface -->
                    <path d="M 55,52 L 56,65 C 56,70 124,70 124,65 L 125,52 Z" fill="#fffdfa"/>
                    <ellipse cx="90" cy="52" rx="35" ry="9.5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
                    
                    <!-- Toasted Coconut Chips & Pistachio Flakes on Top -->
                    <ellipse cx="85" cy="50" rx="6" ry="2" fill="#e8c896" transform="rotate(-15 85 50)"/>
                    <ellipse cx="95" cy="49" rx="6" ry="2" fill="#e8c896" transform="rotate(20 95 49)"/>
                    <ellipse cx="90" cy="52" rx="5" ry="1.5" fill="#edd5a8"/>
                    <circle cx="88" cy="48" r="1.5" fill="#388e3c"/><circle cx="92" cy="51" r="1.5" fill="#388e3c"/>
                    
                    <!-- Fresh Cracked Coconut Half (Right Side) -->
                    <path d="M 140,80 C 135,115 185,115 180,80 C 180,75 140,75 140,80 Z" fill="#4a2c11" stroke="#2c1a0e" stroke-width="2"/>
                    <ellipse cx="160" cy="80" rx="20" ry="8" fill="#ffffff" stroke="#d4af37" stroke-width="1.5"/>
                    <ellipse cx="160" cy="80" rx="16" ry="5.5" fill="#fcfcfc"/>
                    
                    <!-- Silver Spoon on Saucer -->
                    <path d="M 120,110 Q 135,100 148,90" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round"/>
                    <ellipse cx="120" cy="110" rx="4" ry="2.5" fill="#d4af37"/>
                </svg>`;

            case 'puttu-kadale-curry': // Puttu & Kadale Curry
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Serving Plate Base with Banana Leaf -->
                    <ellipse cx="65" cy="105" rx="55" ry="16" fill="#dedede"/>
                    <ellipse cx="65" cy="85" rx="50" ry="24" fill="#ffffff" stroke="#ccc" stroke-width="1.5"/>
                    <ellipse cx="65" cy="83" rx="44" ry="20" fill="#1b5e20"/>
                    
                    <!-- 2 Cylindrical Steamed White Puttu Logs -->
                    <g transform="translate(32, 60) rotate(-20)">
                        <rect x="0" y="0" width="45" height="18" rx="9" fill="#fcfcfc" stroke="#e0e0e0" stroke-width="1"/>
                        <line x1="15" y1="0" x2="15" y2="18" stroke="#d4af37" stroke-width="2" stroke-dasharray="2 2"/>
                        <line x1="30" y1="0" x2="30" y2="18" stroke="#d4af37" stroke-width="2" stroke-dasharray="2 2"/>
                    </g>
                    <g transform="translate(48, 70) rotate(-20)">
                        <rect x="0" y="0" width="45" height="18" rx="9" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
                        <line x1="15" y1="0" x2="15" y2="18" stroke="#d4af37" stroke-width="2" stroke-dasharray="2 2"/>
                        <line x1="30" y1="0" x2="30" y2="18" stroke="#d4af37" stroke-width="2" stroke-dasharray="2 2"/>
                    </g>
                    
                    <!-- Ceramic Bowl of Black Chickpea (Kadala) Curry (Right Side) -->
                    <ellipse cx="145" cy="108" rx="42" ry="14" fill="#d0d0d0"/>
                    <ellipse cx="145" cy="88" rx="40" ry="22" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
                    <ellipse cx="145" cy="85" rx="35" ry="16" fill="#5c2b0c"/>
                    
                    <!-- Black Chickpeas (Kadala) & Curry Leaves Garnishing -->
                    <circle cx="130" cy="82" r="3" fill="#3b1904"/><circle cx="142" cy="85" r="3.5" fill="#3b1904"/><circle cx="155" cy="80" r="3" fill="#3b1904"/>
                    <circle cx="138" cy="89" r="3" fill="#3b1904"/><circle cx="150" cy="88" r="3.5" fill="#3b1904"/><circle cx="160" cy="86" r="2.5" fill="#3b1904"/>
                    <ellipse cx="145" cy="82" rx="4" ry="2" fill="#388e3c" transform="rotate(20 145 82)"/>
                </svg>`;


            case 'budino-dolce-al-cocco': // Coconut Payasam / Payasa in Coconut Shell Bowl
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rustic Wooden Log Plate Base -->
                    <ellipse cx="100" cy="115" rx="80" ry="20" fill="#6e461b" stroke="#3b220a" stroke-width="2"/>
                    <!-- Banana Leaf Coaster -->
                    <ellipse cx="100" cy="110" rx="72" ry="16" fill="#2b7a3e"/>
                    <line x1="30" y1="110" x2="170" y2="110" stroke="#1d5229" stroke-width="1.5"/>
                    
                    <!-- Brass Ring Coaster -->
                    <ellipse cx="100" cy="98" rx="45" ry="12" fill="#c49335" stroke="#4a2c11" stroke-width="1.5"/>
                    
                    <!-- Coconut Shell Bowl -->
                    <path d="M 50,68 C 45,108 155,108 150,68 Z" fill="#3b200b" stroke="#1c0e04" stroke-width="2.5"/>
                    <ellipse cx="100" cy="68" rx="50" ry="16" fill="#633918" stroke="#1c0e04" stroke-width="2"/>
                    <ellipse cx="100" cy="66" rx="46" ry="14" fill="#fffdfa"/>
                    
                    <!-- Creamy White Coconut Payasa Pudding Surface -->
                    <ellipse cx="100" cy="66" rx="44" ry="12" fill="#fcf9f2"/>
                    
                    <!-- Silver/Gold Spoon resting inside -->
                    <path d="M 75,50 Q 88,68 98,72 Q 102,74 95,78" fill="none" stroke="#d4af37" stroke-width="3" stroke-linecap="round"/>
                    <ellipse cx="73" cy="48" rx="6" ry="4" fill="#d4af37"/>
                    
                    <!-- Chopped Green Pistachio Bits Garnishing -->
                    <circle cx="82" cy="64" r="2" fill="#388e3c"/><circle cx="95" cy="60" r="2.5" fill="#4caf50"/><circle cx="112" cy="66" r="2" fill="#388e3c"/>
                    <circle cx="125" cy="62" r="2.5" fill="#4caf50"/><circle cx="104" cy="70" r="2" fill="#388e3c"/>
                    
                    <!-- Frangipani / Jasmine Flower on Bottom Left -->
                    <g transform="translate(42, 105)">
                        <circle cx="0" cy="0" r="3" fill="#fbc02d"/>
                        <circle cx="-5" cy="-5" r="4" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5"/>
                        <circle cx="5" cy="-5" r="4" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5"/>
                        <circle cx="-6" cy="3" r="4" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5"/>
                        <circle cx="6" cy="3" r="4" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5"/>
                        <circle cx="0" cy="7" r="4" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5"/>
                    </g>
                </svg>`;



            case 'nanarico-tequila-sparkle': // Beverage Glass
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="90" cy="120" rx="40" ry="12" fill="#c4aa82"/>
                    <!-- Highball Glass -->
                    <rect x="70" y="35" width="40" height="80" rx="4" fill="#eaf2f7" opacity="0.85" stroke="#4a2c11" stroke-width="2"/>
                    <!-- Tender Coconut & Nannari Layering -->
                    <rect x="72" y="70" width="36" height="42" fill="#cf7a29" opacity="0.8"/>
                    <rect x="72" y="40" width="36" height="30" fill="#fcfaf2" opacity="0.85"/>
                    <!-- Straw & Basil Seeds -->
                    <line x1="80" y1="20" x2="92" y2="110" stroke="#bf2c2c" stroke-width="4"/>
                    <circle cx="78" cy="60" r="1.5" fill="#111"/><circle cx="95" cy="80" r="1.5" fill="#111"/>
                    <!-- Tender Coconut Slice on Rim -->
                    <circle cx="110" cy="40" r="12" fill="#8c5828" stroke="#4a2c11" stroke-width="1.5"/>
                    <circle cx="110" cy="40" r="8" fill="#fff"/>
                </svg>`;

            default:
                return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="70" r="40" fill="#dfaa43" stroke="#4a2c11" stroke-width="2"/>
                </svg>`;
        }
    }

    // Robust global image error handler
    window.handleImageError = function(imgEl, itemId) {
        imgEl.onerror = null;
        const container = imgEl.closest('.dish-image-container');
        if (container) {
            container.innerHTML = getDishSVG(itemId);
        }
    };

    // Helper function to render image or SVG fallback
    function getDishGraphic(item) {
        if (item.imageUrl) {
            return `<img src="${item.imageUrl}" alt="${item.italianName}" loading="lazy" onerror="window.handleImageError(this, '${item.id}')"/>`;
        }
        return getDishSVG(item.id);
    }

    const menuData = [
        {
            id: 'frittelle-di-lenticchie',
            category: 'starters',
            italianName: 'FRITTELLE DI LENTICCHIE',
            indianAlias: 'Curd Vada',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/curd_vada.png',
            description: 'Lentil fritters soaked in seasoned yogurt, tempered with spices and herbs.',
            story: 'Soft golden urad dal lentil fritters (Dahi Vada) soaked in thick seasoned yogurt, dusted with red chilli powder, roasted cumin, ginger juliennes, sweet chutney drizzle, and fresh mint leaf sprig.',
            ingredients: ['Urad Dal', 'Thick Seasoned Yogurt', 'Red Chilli Powder', 'Roasted Cumin', 'Ginger Juliennes', 'Mint Leaves']
        },

        {
            id: 'bruschetta-al-pomodoro',
            category: 'starters',
            italianName: 'BRUSCHETTA AL POMODORO',
            indianAlias: 'Bruschetta',
            price: 49,
            diet: 'veg',
            imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&auto=format&fit=crop&q=80',
            description: 'Crispy toasted bread topped with fresh tomatoes, basil, olive oil and herbs.',
            story: 'Classic Tuscan antipasto made with artisanal wood-fired crusty bread rubbed with fresh garlic cloves, laden with vine-ripened tomatoes, sweet Genovese basil, and a pinch of Indian chaat spice.',
            ingredients: ['Crusty Artisanal Bread', 'Vine Tomatoes', 'Fresh Basil', 'Cold-pressed Olive Oil', 'Garlic', 'Chaat Spice Accent']
        },
        {
            id: 'sferette-croccanti-speziate',
            category: 'starters',
            italianName: 'SFERETTE CROCCANTI SPEZIATE',
            indianAlias: 'Panipuri',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/panipuri.png',
            description: 'Crispy hollow spheres filled with spicy water.',
            story: 'India’s beloved street food! Crispy semolina puri spheres filled with chickpea ragda mash, spicy teekha mint water, chopped onions, and fresh cilantro, served in traditional eco leaf dona bowls.',
            ingredients: ['Crispy Puri Spheres', 'Chickpea Ragda Mash', 'Teekha Mint Water', 'Chopped Onions', 'Cilantro']
        },

        {
            id: 'pasta-italiana',
            category: 'italian-main',
            italianName: 'PASTA',
            indianAlias: 'Pasta Italiana',
            price: 99,
            diet: 'veg',
            imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80',
            description: 'Fresh handmade Italian pasta served with slow-cooked signature sauce, parmesan and aromatic herbs.',
            story: 'Artisanal handmade pasta tossed in a rich, slow-simmered marinara sauce enriched with Indian aromatic spices, garlic, aged parmesan cheese, and sweet basil leaves.',
            ingredients: ['Handmade Pasta', 'Slow-cooked Tomato Marinara', 'Parmesan Cheese', 'Garlic', 'Indian Garam Masala Accent', 'Basil']
        },
        {
            id: 'piadina-flatbread',
            category: 'italian-main',
            italianName: 'PIADINA ROMAGNOLA',
            indianAlias: 'Italian Flatbread',
            price: 99,
            diet: 'veg',
            imageUrl: 'images/piadina.png',
            description: 'Traditional Romagna flatbread stuffed with mozzarella & fresh greens.',
            story: 'Authentic Italian street food from Romagna! A griddled, golden-charred flatbread folded over warm melted mozzarella cheese, fresh green spinach leaves, juicy red tomatoes, and extra virgin olive oil drizzle.',
            ingredients: ['Italian Flatbread', 'Melted Mozzarella', 'Fresh Spinach/Arugula', 'Sliced Tomatoes', 'Olive Oil']
        },
        {
            id: 'risotto-al-pollo-speziato',
            category: 'indian-main',
            italianName: 'RISOTTO AL POLLO SPEZIATO',
            indianAlias: 'Chicken Biryani',
            price: 149,
            diet: 'non-veg',
            imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
            description: 'Spiced rice cooked with chicken and aromatic spices.',
            story: 'The ultimate royal marriage! Fragrant long-grain Basmati and Arborio rice slow dum-cooked with tender marinated chicken, saffron, star anise, ghee, and finished with a velvety parmesan emulsion.',
            ingredients: ['Basmati & Arborio Rice', 'Tender Chicken', 'Saffron', 'Star Anise', 'Ghee', 'Parmesan Emulsion']
        },
        {
            id: 'riso-freddo-allo-yogurt',
            category: 'indian-main',
            italianName: 'RISO FREDDO ALLO YOGURT',
            indianAlias: 'Curd Rice',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/curd_rice.png',
            description: 'Soothing curd rice tempered with mustard, curry leaves & ginger.',
            story: 'Creamy South Indian Curd Rice served in a ceramic bowl over a rustic wooden board, tempered with mustard seeds, urad dal, curry leaves, and a standing fried red chilli, accompanied by crispy appalam papad and tangy mango pickle.',
            ingredients: ['Steamed Rice', 'Fresh Creamy Curd', 'Mustard Tempering', 'Curry Leaves', 'Fried Red Chilli', 'Appalam Papad']
        },
        {
            id: 'riso-al-mango-agro-piccante',
            category: 'indian-main',
            italianName: 'RISO AL MANGO AGRO-PICCANTE',
            indianAlias: 'Mango Puliyogare',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/mango_puliyogare.png',
            description: 'Tangy and spicy raw mango rice tempered with peanuts and red chillies.',
            story: 'Traditional South Indian Mango Puliyogare spiced rice served in a two-handled brass kadai over a burlap mat, packed with grated raw mango juliennes, crunchy fried peanuts, curry leaves, and Byadgi red chillies.',
            ingredients: ['Raw Mango Shreds', 'Steamed Rice', 'Fried Peanuts', 'Byadgi Red Chillies', 'Curry Leaves', 'Puliyogare Spices']
        },
        {
            id: 'crespelle-sottili-pollo-curry',
            category: 'indian-main',
            italianName: 'CRESPELLE SOTTILI DI RISO CON POLLO AL CURRY',
            indianAlias: 'Neer Dosa with Chicken Curry',
            price: 149,
            diet: 'non-veg',
            imageUrl: 'images/neer_dosa.png',
            description: 'Thin rice crepes served with spicy chicken curry.',
            story: 'Delicate, feather-light Mangalorean rice crepes (Neer Dosa) served on a woven wicker basket mat over a banana leaf, garnished with fresh curry leaves sprigs and paired with coconut chutney and spicy chicken curry.',
            ingredients: ['Lacy Rice Crepes', 'Mangalorean Style Chicken Curry', 'Coconut Chutney', 'Curry Leaves', 'Byadgi Chillies']
        },

        {
            id: 'puttu-kadale-curry',
            category: 'indian-main',
            italianName: 'TORTINO DI RISO CON CURRY DI CECI NERI',
            indianAlias: 'Puttu & Kadale Curry',
            price: 99,
            diet: 'veg',
            imageUrl: 'images/puttu_kadale.png',
            description: 'Steamed rice and coconut cylinders served with spicy black chickpea curry.',
            story: 'Classic South Indian staple! Cylindrical steamed rice puttu layered with fresh grated coconut, served on a banana leaf plate alongside a rich white bowl of spicy black chickpea (Kadala) curry tempered with roasted coconut and curry leaves.',
            ingredients: ['Steamed Rice Flour', 'Fresh Grated Coconut', 'Black Chickpeas (Kadala)', 'Roasted Coconut Spices', 'Curry Leaves']
        },
        {
            id: 'involtini-dolci-crespelle',
            category: 'indian-main',
            italianName: 'INVOLTINI DOLCI DI CRESPELLE',
            indianAlias: 'Neer Dosa Kaibella Roll',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/neer_dosa_roll.png',
            description: 'Sweet rolled crepes filled with grated coconut & jaggery.',
            story: 'A sweet coastal Karnataka delicacy! Soft white Neer Dosa crepes rolled with a sweet stuffing of fresh grated coconut (Kayi), dark organic jaggery (Bella), cardamom, and roasted cashews, served on a banana leaf thali with liquid jaggery dip.',
            ingredients: ['Neer Dosa Crepes', 'Grated Fresh Coconut', 'Organic Jaggery', 'Green Cardamom', 'Roasted Cashews']
        },
        {
            id: 'composta-di-albicocche-speziata',
            category: 'desserts',
            italianName: 'COMPOSTA DI ALBICOCCE SPEZIATA',
            indianAlias: 'Qurbani Ka Meetha',
            price: 49,

            diet: 'veg',
            imageUrl: 'images/kurbani_meetha.png',
            description: 'Stewed sweet apricot dessert topped with blanched apricot kernels.',
            story: 'Royal Hyderabadi delicacy! Slow-stewed Turkish apricots simmered to rich amber-red compote, flavoured with saffron and cardamom, garnished with blanched apricot kernel nuts, served in an elegant stemmed glass coupe bowl.',
            ingredients: ['Turkish Dried Apricots', 'Saffron', 'Blanched Apricot Kernels', 'Cardamom', 'Pure Cane Sugar']
        },

        {
            id: 'tartufini-dolci-di-miglio',
            category: 'desserts',
            italianName: 'TARTUFINI DOLCI DI MIGLIO',
            indianAlias: 'Pearl Millet ladoo',
            price: 29,
            diet: 'veg',
            imageUrl: 'images/millet_ladoo.png',
            description: 'Sweet pearl millet energy balls studded with melon seeds.',
            story: 'Nutritious organic millet bonbons (Sajje Ladoo) made from roasted pearl millet flour, pure cow ghee, palm jaggery, cardamom, and studded with white melon seeds, stacked high on a traditional brass plate.',
            ingredients: ['Pearl Millet (Sajje)', 'Pure Cow Ghee', 'Palm Jaggery', 'Melon Seeds', 'Cardamom']
        },

        {
            id: 'indo-italian-panna-cotta',
            category: 'desserts',
            italianName: 'INDO-ITALIAN PANNA COTTA',
            indianAlias: 'Indo-Italian Dessert',
            price: 99,
            diet: 'veg',
            imageUrl: 'images/panna_cotta.png',
            description: 'Strained coconut milk and rice pudding, fusion panna cotta.',
            story: 'Signature fusion dessert served in a clear glass tumbler over a saucer! Alternating layers of creamy white vanilla panna cotta and golden-brown spiced jaggery, garnished with toasted coconut chips & pistachios, accompanied by a fresh cracked coconut half.',
            ingredients: ['Coconut Milk', 'Vanilla Bean', 'Cardamom Rice Jelly', 'Mango Coulis', 'Toasted Coconut Chips']
        },

        {
            id: 'budino-dolce-al-cocco',
            category: 'desserts',
            italianName: 'BUDINO DOLCE AL COCCO',
            indianAlias: 'Coconut Payasa',
            price: 49,
            diet: 'veg',
            imageUrl: 'images/coconut_payasa.png',
            description: 'Sweet coconut milk pudding with cardamom.',
            story: 'Rich South Indian Elaneer Payasam style sweet coconut milk pudding served in a natural coconut shell bowl with green pistachios, tender coconut meat, cardamom, spoon, and frangipani flower garnish.',
            ingredients: ['Tender Coconut Meat', 'Coconut Milk', 'Cardamom', 'Pistachios', 'Cow Ghee']
        },


        {
            id: 'nanarico-tequila-sparkle',
            category: 'beverages',
            italianName: 'Na nariCo Tequila Sparkle',
            indianAlias: 'Elaneer Nannari Sarbath',
            price: 69,
            diet: 'veg',
            imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
            description: 'Tender coconut infused with traditional nannari root syrup.',
            story: 'Refresher supreme! Pure tender coconut water infused with traditional Nannari (Indian Sarsaparilla) root syrup, fresh lime juice, sparkling soda water, and basil seeds.',
            ingredients: ['Tender Coconut Water', 'Nannari Root Syrup', 'Fresh Lime', 'Sparkling Soda', 'Basil Seeds']
        }
    ];


    // Combos Preset Definitions
    const comboPresets = {
        'grand-feast': {
            name: 'Adda Grand Feast Combo',
            items: ['frittelle-di-lenticchie', 'risotto-al-pollo-speziato', 'indo-italian-panna-cotta', 'nanarico-tequila-sparkle'],
            price: 319
        },
        'veg-fusion': {
            name: 'Verde Fusion Delight',
            items: ['bruschetta-al-pomodoro', 'piadina-flatbread', 'riso-al-mango-agro-piccante', 'budino-dolce-al-cocco'],
            price: 215
        },
        'coastal-dosa': {
            name: 'Coastal Dosa & Curry Combo',
            items: ['crespelle-sottili-pollo-curry', 'involtini-dolci-crespelle', 'nanarico-tequila-sparkle'],
            price: 235
        }
    };

    // --- STATE MANAGEMENT ---
    let cart = [];
    let currentCategory = 'all';
    let currentDietFilter = 'all';
    let searchQuery = '';
    let isDarkMode = false;
    let appliedPromo = null;
    let audioContext = null;
    let isAudioPlaying = false;
    let audioOscillators = [];

    // --- DOM ELEMENTS ---
    const menuGrid = document.getElementById('menuGrid');
    const noResultsState = document.getElementById('noResultsState');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const categoryTabs = document.querySelectorAll('.tab-btn');
    const filterPills = document.querySelectorAll('.filter-pill');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    
    const dishModal = document.getElementById('dishModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    const cartDrawer = document.getElementById('cartDrawer');
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartEmptyState = document.getElementById('cartEmptyState');
    const billSubtotal = document.getElementById('billSubtotal');
    const billDiscount = document.getElementById('billDiscount');
    const discountRow = document.getElementById('discountRow');
    const billTotal = document.getElementById('billTotal');
    const promoCodeInput = document.getElementById('promoCodeInput');
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    const exportReceiptBtn = document.getElementById('exportReceiptBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');

    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const toggleAudioBtn = document.getElementById('toggleAudioBtn');
    const printViewBtn = document.getElementById('printViewBtn');
    const digitalView = document.getElementById('digitalView');
    const posterView = document.getElementById('posterView');
    const closePosterViewBtn = document.getElementById('closePosterViewBtn');
    const closePromo = document.getElementById('closePromo');
    const promoBanner = document.getElementById('promoBanner');

    // --- INITIALIZATION ---
    function init() {
        renderMenuCards();
        updateCategoryCounts();
        setupEventListeners();
        initCustomerQR();
        checkURLParams();
    }

    // --- RENDER MENU CARDS ---
    function renderMenuCards() {
        menuGrid.innerHTML = '';

        const filtered = menuData.filter(item => {
            const matchesCategory = (currentCategory === 'all') || (item.category === currentCategory);
            const matchesDiet = (currentDietFilter === 'all') || (item.diet === currentDietFilter);
            const matchesSearch = searchQuery === '' || 
                item.italianName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.indianAlias.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesDiet && matchesSearch;
        });

        if (filtered.length === 0) {
            noResultsState.style.display = 'block';
        } else {
            noResultsState.style.display = 'none';
            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = 'dish-card';
                card.setAttribute('data-id', item.id);

                card.innerHTML = `
                    <div class="dish-header">
                        <span class="dish-category-badge">${formatCategoryName(item.category)}</span>
                        <span class="diet-icon-badge ${item.diet}" title="${item.diet === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></span>
                    </div>

                    <div class="dish-image-container">
                        ${getDishGraphic(item)}
                    </div>

                    
                    <div class="dish-title-group">
                        <h3 class="dish-italian-name">${item.italianName}</h3>
                        <span class="dish-indian-alias">(${item.indianAlias})</span>
                    </div>

                    <p class="dish-description">${item.description}</p>

                    <div class="dish-footer">
                        <span class="dish-price">₹${item.price}</span>
                        <div class="dish-actions">
                            <button class="btn btn-outline btn-sm view-story-btn" data-id="${item.id}" title="Read dish story">
                                <i class="fa-solid fa-book-open"></i> Story
                            </button>
                            <button class="btn btn-primary btn-sm add-cart-btn" data-id="${item.id}">
                                <i class="fa-solid fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                `;


                menuGrid.appendChild(card);
            });
        }
    }

    function formatCategoryName(cat) {
        switch(cat) {
            case 'starters': return 'Starter';
            case 'italian-main': return 'Italian Main';
            case 'indian-main': return 'Indian Main';
            case 'desserts': return 'Dessert';
            case 'beverages': return 'Beverage';
            default: return cat;
        }
    }

    function updateCategoryCounts() {
        const counts = {
            all: menuData.length,
            starters: menuData.filter(i => i.category === 'starters').length,
            'italian-main': menuData.filter(i => i.category === 'italian-main').length,
            'indian-main': menuData.filter(i => i.category === 'indian-main').length,
            desserts: menuData.filter(i => i.category === 'desserts').length,
            beverages: menuData.filter(i => i.category === 'beverages').length
        };

        for (let key in counts) {
            const countEl = document.getElementById(`count-${key}`);
            if (countEl) countEl.textContent = counts[key];
        }
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // Search
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
            renderMenuCards();
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            renderMenuCards();
        });

        // Category Tabs
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.dataset.category;
                renderMenuCards();
            });
        });

        // Dietary Filter
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentDietFilter = pill.dataset.filter;
                renderMenuCards();
            });
        });

        resetFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            currentCategory = 'all';
            currentDietFilter = 'all';
            
            categoryTabs.forEach(t => t.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
            
            filterPills.forEach(p => p.classList.remove('active'));
            document.querySelector('[data-filter="all"]').classList.add('active');
            
            renderMenuCards();
        });

        // Delegate Grid Clicks
        menuGrid.addEventListener('click', (e) => {
            const addBtn = e.target.closest('.add-cart-btn');
            const storyBtn = e.target.closest('.view-story-btn');

            if (addBtn) {
                const itemId = addBtn.dataset.id;
                addToCart(itemId);
            } else if (storyBtn) {
                const itemId = storyBtn.dataset.id;
                openDishModal(itemId);
            }
        });

        // Combos Clicks
        document.querySelectorAll('.add-combo-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const comboKey = btn.dataset.comboId;
                addComboToCart(comboKey);
            });
        });

        // Modal Close
        closeModalBtn.addEventListener('click', () => {
            dishModal.style.display = 'none';
        });

        dishModal.addEventListener('click', (e) => {
            if (e.target === dishModal) dishModal.style.display = 'none';
        });

        // Cart Drawer
        if (openCartBtn) {
            openCartBtn.addEventListener('click', () => {
                cartDrawer.style.display = 'flex';
            });
        }

        const stickyMobileCartBar = document.getElementById('stickyMobileCartBar');
        if (stickyMobileCartBar) {
            stickyMobileCartBar.addEventListener('click', () => {
                cartDrawer.style.display = 'flex';
            });
        }

        closeCartBtn.addEventListener('click', () => {
            cartDrawer.style.display = 'none';
        });

        cartDrawer.addEventListener('click', (e) => {
            if (e.target === cartDrawer) cartDrawer.style.display = 'none';
        });

        // Promo Code
        applyPromoBtn.addEventListener('click', () => {
            const code = promoCodeInput.value.trim().toUpperCase();
            if (code === 'INDOITALIA10') {
                appliedPromo = 'INDOITALIA10';
                alert('Promo code INDOITALIA10 applied! 10% discount added.');
            } else {
                alert('Invalid promo code. Use INDOITALIA10 for 10% OFF.');
            }
            updateCartUI();
        });

        // Clear Cart & Share
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Clear all items from your potluck order selection?')) {
                cart = [];
                updateCartUI();
            }
        });

        exportReceiptBtn.addEventListener('click', () => {
            exportPotluckOrder();
        });

        // Theme Toggle
        if (toggleThemeBtn) {
            toggleThemeBtn.addEventListener('click', () => {
                isDarkMode = !isDarkMode;
                if (isDarkMode) {
                    document.body.classList.add('royal-purple-theme');
                    toggleThemeBtn.querySelector('.btn-text').textContent = 'Parchment Mode';
                } else {
                    document.body.classList.remove('royal-purple-theme');
                    toggleThemeBtn.querySelector('.btn-text').textContent = 'Royal Purple Mode';
                }
            });
        }

        // Audio Bistro Ambient Toggle
        if (toggleAudioBtn) {
            toggleAudioBtn.addEventListener('click', () => {
                toggleBistroAudio();
            });
        }

        // Print / Poster View Toggle
        printViewBtn.addEventListener('click', () => {
            digitalView.style.display = 'none';
            posterView.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        closePosterViewBtn.addEventListener('click', () => {
            posterView.style.display = 'none';
            digitalView.style.display = 'block';
        });

        if (closePromo) {
            closePromo.addEventListener('click', () => {
                promoBanner.style.display = 'none';
            });
        }
    }

    // --- DISH STORY MODAL ---
    function openDishModal(itemId) {
        const item = menuData.find(i => i.id === itemId);
        if (!item) return;

        modalBody.innerHTML = `
            <div class="modal-dish-header">
                <span class="dish-category-badge">${formatCategoryName(item.category)} • ${item.diet.toUpperCase()}</span>
                <h2 class="modal-dish-title">${item.italianName}</h2>
                <div class="modal-dish-alias">(${item.indianAlias}) - ₹${item.price}</div>
            </div>

            <div class="dish-image-container" style="height: 200px; margin: 12px 0;">
                ${getDishGraphic(item)}
            </div>


            <p style="font-family: var(--font-serif-body); font-size: 1.1rem; line-height: 1.5; margin-bottom: 12px;">
                ${item.description}
            </p>


            <div class="story-box">
                <h4><i class="fa-solid fa-wand-magic-sparkles"></i> Culinary Alchemy & Story</h4>
                <p>${item.story}</p>
            </div>

            <div style="margin-top: 16px;">
                <h4 style="font-family: var(--font-heading-sub); font-size: 0.95rem; color: var(--accent-purple); margin-bottom: 6px;">
                    <i class="fa-solid fa-leaf"></i> Key Ingredients
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${item.ingredients.map(ing => `<span style="background: var(--bg-card-alt); border: 1px solid var(--border-gold); padding: 3px 8px; border-radius: 4px; font-size: 0.82rem;">${ing}</span>`).join('')}
                </div>
            </div>

            <button class="btn btn-primary btn-block" style="margin-top: 20px;" onclick="document.getElementById('dishModal').style.display='none';">
                Close Details
            </button>
        `;

        dishModal.style.display = 'flex';
    }

    // --- CART OPERATIONS ---
    function addToCart(itemId) {
        const existing = cart.find(i => i.id === itemId);
        if (existing) {
            existing.qty += 1;
        } else {
            const item = menuData.find(i => i.id === itemId);
            if (item) {
                cart.push({ ...item, qty: 1 });
            }
        }
        updateCartUI();
        
        // Brief button feedback
        if (openCartBtn) {
            openCartBtn.classList.add('pulse');
            setTimeout(() => openCartBtn.classList.remove('pulse'), 300);
        }

        const stickyMobileCartBar = document.getElementById('stickyMobileCartBar');
        if (stickyMobileCartBar) {
            stickyMobileCartBar.style.display = 'flex';
        }
    }

    function addComboToCart(comboKey) {
        const combo = comboPresets[comboKey];
        if (!combo) return;

        combo.items.forEach(itemId => addToCart(itemId));
        alert(`Added ${combo.name} to your Potluck Cart!`);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        if (cartCountBadge) cartCountBadge.textContent = totalItems;

        const stickyMobileCartBar = document.getElementById('stickyMobileCartBar');
        const mobileCartItemCount = document.getElementById('mobileCartItemCount');
        const mobileCartTotal = document.getElementById('mobileCartTotal');

        if (cart.length === 0) {
            cartItemsList.innerHTML = '';
            cartEmptyState.style.display = 'block';
            exportReceiptBtn.disabled = true;
            clearCartBtn.disabled = true;
            billSubtotal.textContent = '₹0';
            billDiscount.textContent = '-₹0';
            discountRow.style.display = 'none';
            billTotal.textContent = '₹0';
            if (stickyMobileCartBar) stickyMobileCartBar.style.display = 'none';
            return;
        }

        cartEmptyState.style.display = 'none';
        exportReceiptBtn.disabled = false;
        clearCartBtn.disabled = false;

        cartItemsList.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;

            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.italianName}</h4>
                    <small>(${item.indianAlias}) • ₹${item.price} x ${item.qty}</small>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="window.changeQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="window.changeQty('${item.id}', 1)">+</button>
                </div>
            `;
            cartItemsList.appendChild(row);
        });

        let discount = 0;
        if (appliedPromo === 'INDOITALIA10') {
            discount = Math.round(subtotal * 0.10);
            discountRow.style.display = 'flex';
            billDiscount.textContent = `-₹${discount}`;
        } else {
            discountRow.style.display = 'none';
        }

        const total = subtotal - discount;
        billSubtotal.textContent = `₹${subtotal}`;
        billTotal.textContent = `₹${total}`;

        if (stickyMobileCartBar) {
            stickyMobileCartBar.style.display = 'flex';
            if (mobileCartItemCount) mobileCartItemCount.textContent = totalItems;
            if (mobileCartTotal) mobileCartTotal.textContent = `Total: ₹${total}`;
        }
    }

    window.changeQty = function(itemId, delta) {
        const item = cart.find(i => i.id === itemId);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== itemId);
        }
        updateCartUI();
    };

    // Expose menuData for Admin portal
    window.addaMenuData = menuData;

    // --- ON-SPOT FOOD ORDERING & PICKUP TOKEN SYSTEM ---
    function checkOnSpotQRParam() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('spot') || urlParams.has('qr') || urlParams.has('src') || urlParams.has('promo')) {
            const badge = document.getElementById('onspotHeaderBadge');
            const badgeText = document.getElementById('onspotBadgeText');
            const locationName = urlParams.get('location') || urlParams.get('src') || 'On-Spot Mobile Order';
            if (badgeText) badgeText.textContent = locationName;
            if (badge) badge.style.display = 'inline-flex';
        }

        if (urlParams.get('promo') === 'INDOITALIA10') {
            appliedPromo = 'INDOITALIA10';
            updateCartUI();
        }
    }

    // Call check on page load
    checkOnSpotQRParam();

    function exportPotluckOrder() {
        if (cart.length === 0) return;

        const guestName = document.getElementById('guestNameInput') ? document.getElementById('guestNameInput').value.trim() : '';

        // Generate On-Spot Order Token & Timestamp
        const orderNum = Math.floor(100 + Math.random() * 900);
        const orderId = `#ADDA-${orderNum}`;
        const timestamp = new Date().toISOString();

        let subtotal = 0;
        cart.forEach(i => subtotal += (i.price * i.qty));

        let discount = 0;
        if (appliedPromo === 'INDOITALIA10') {
            discount = Math.round(subtotal * 0.10);
        }
        const grandTotal = subtotal - discount;

        // Build Order Object
        const newOrder = {
            orderId: orderId,
            guestName: guestName || 'Potluck Guest',
            orderType: 'ON_SPOT_PICKUP',
            items: cart.map(i => ({ id: i.id, italianName: i.italianName, indianAlias: i.indianAlias, qty: i.qty, price: i.price })),
            subtotal: subtotal,
            discount: discount,
            totalPrice: grandTotal,
            status: 'NEW',
            timestamp: timestamp
        };

        // Save to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('adda_orders') || '[]');
        existingOrders.push(newOrder);
        localStorage.setItem('adda_orders', JSON.stringify(existingOrders));

        // Broadcast to Admin Dashboard via BroadcastChannel
        try {
            if ('BroadcastChannel' in window) {
                const bc = new BroadcastChannel('adda_orders_channel');
                bc.postMessage({ type: 'NEW_ORDER', order: newOrder });
            }
        } catch (e) {
            console.log('Broadcast error', e);
        }

        // Multi-Device Cloud Real-Time Sync
        const CLOUD_SYNC_URL = 'https://api.restful-api.dev/objects/ff8081819f7e10ae019fac4a6aea3fc3';
        fetch(CLOUD_SYNC_URL)
            .then(res => res.json())
            .then(resData => {
                let cloudOrders = (resData && resData.data && Array.isArray(resData.data.orders)) ? resData.data.orders : [];
                if (!cloudOrders.some(o => o.orderId === newOrder.orderId)) {
                    cloudOrders.push(newOrder);
                }
                return fetch(CLOUD_SYNC_URL, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: 'PurpleCircleOrders', data: { orders: cloudOrders } })
                });
            })
            .catch(err => console.log('Cloud sync push error', err));

        // Show On-Spot Pickup Confirmation Modal
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 10px 0;">
                <div style="font-size: 3rem; color: #4ade80; margin-bottom: 8px;">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h2 style="font-family: var(--font-heading-sub); color: var(--accent-purple); font-size: 1.6rem; margin-bottom: 2px;">
                    On-Spot Order Transmitted!
                </h2>
                <p style="font-size: 0.9rem; color: var(--text-dark); margin-bottom: 12px;">Show your Pickup Token at the kitchen counter when called.</p>

                <div style="background: var(--bg-card-alt); border: 2px dashed var(--border-gold); padding: 12px; border-radius: 10px; margin-bottom: 16px;">
                    <div style="font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; color: var(--accent-purple);">YOUR PICKUP TOKEN</div>
                    <div style="font-family: var(--font-heading-sub); font-size: 2rem; font-weight: 900; color: var(--accent-terracotta);">
                        ${orderId}
                    </div>
                </div>

                <div style="font-size: 0.95rem; margin-bottom: 16px; text-align: left; background: var(--bg-card-alt); border: 1px solid var(--border-gold); padding: 12px; border-radius: 8px;">
                    <div><strong>👤 Guest:</strong> ${newOrder.guestName}</div>
                    <div><strong>🍽️ Dishes Ordered:</strong> ${cart.length} item type(s)</div>
                    <div><strong>💰 Total Payable:</strong> ₹${grandTotal}</div>
                </div>

                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-primary btn-block" onclick="copyOrderReceipt('${orderId}', ${grandTotal})">
                        <i class="fa-solid fa-copy"></i> Copy Order Token for Counter
                    </button>
                    <button class="btn btn-secondary btn-block" onclick="document.getElementById('dishModal').style.display='none';">
                        Close
                    </button>
                </div>
            </div>
        `;

        window.copyOrderReceipt = function(id, total) {
            let receipt = `🇮🇹🇮🇳 *NAMMA PURPLE'S INDO-ITALIAN ADDA* 🇮🇳🇮🇹\n`;
            receipt += `🎟️ *ON-SPOT PICKUP TOKEN: ${id}*\n`;
            receipt += `👤 Guest: ${guestName || 'Potluck Guest'}\n`;
            receipt += `------------------------------------\n`;
            cart.forEach(i => {
                receipt += `• ${i.italianName} (${i.indianAlias}) x ${i.qty} = ₹${i.price * i.qty}\n`;
            });
            receipt += `------------------------------------\n`;
            receipt += `*Total: ₹${total}*\n`;
            receipt += `✨ Show this token at counter for food pickup ✨`;

            navigator.clipboard.writeText(receipt).then(() => {
                alert('On-spot order token copied to clipboard!');
            });
        };

        dishModal.style.display = 'flex';

        // Clear cart & close drawer
        cart = [];
        updateCartUI();
        cartDrawer.style.display = 'none';
    }


    // --- SYNTHESIZED AUDIO AMBIENT (BISTRO SOUND) ---
    function toggleBistroAudio() {
        if (isAudioPlaying) {
            stopAudio();
            toggleAudioBtn.querySelector('.btn-text').textContent = 'Bistro Sound: Off';
            isAudioPlaying = false;
        } else {
            startAudio();
            toggleAudioBtn.querySelector('.btn-text').textContent = 'Bistro Sound: On';
            isAudioPlaying = true;
        }
    }

    function startAudio() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContext();

            // Create soft warm acoustic drone chords (C-G-E vintage ambient tone)
            const freqs = [130.81, 196.00, 261.63, 329.63];
            freqs.forEach(f => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(f, audioContext.currentTime);
                
                gain.gain.setValueAtTime(0.015, audioContext.currentTime);
                
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.start();
                audioOscillators.push(osc);
            });
        } catch (e) {
            console.log('Audio playback not supported or blocked by browser policy.', e);
        }
    }

    // --- CUSTOMER QR CODE GENERATOR & MODAL ---
    function initCustomerQR() {
        const customerQRBtn = document.getElementById('customerQRBtn');
        const customerQRModal = document.getElementById('customerQRModal');
        const closeCustomerQRModal = document.getElementById('closeCustomerQRModal');
        const customerQRContainer = document.getElementById('customerQRContainer');
        const customerQRSubtext = document.getElementById('customerQRSubtext');
        const copyCustomerQRLinkBtn = document.getElementById('copyCustomerQRLinkBtn');
        const downloadCustomerQRBtn = document.getElementById('downloadCustomerQRBtn');

        if (!customerQRBtn || !customerQRModal) return;

        function renderQR() {
            const currentUrl = window.location.href;
            if (customerQRSubtext) {
                try {
                    const urlObj = new URL(currentUrl);
                    const spotSrc = urlObj.searchParams.get('src');
                    if (spotSrc) {
                        customerQRSubtext.innerHTML = `<strong>${spotSrc.toUpperCase()}</strong> • On-Spot Mobile Menu`;
                    } else {
                        customerQRSubtext.textContent = `Namma Purple's Indo-Italian Adda Menu`;
                    }
                } catch(e) {
                    customerQRSubtext.textContent = `Namma Purple's Indo-Italian Adda Menu`;
                }
            }

            customerQRContainer.innerHTML = '';
            if (typeof QRCode !== 'undefined') {
                new QRCode(customerQRContainer, {
                    text: currentUrl,
                    width: 200,
                    height: 200,
                    colorDark: "#2d1228",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            } else {
                renderFallbackCanvasQR(customerQRContainer, currentUrl);
            }
        }

        function renderFallbackCanvasQR(container, text) {
            container.innerHTML = '';
            const canvas = document.createElement('canvas');
            canvas.width = 200;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 200, 200);
            ctx.fillStyle = '#2d1228';
            ctx.fillRect(15, 15, 50, 50);
            ctx.fillRect(135, 15, 50, 50);
            ctx.fillRect(15, 135, 50, 50);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(25, 25, 30, 30);
            ctx.fillRect(145, 25, 30, 30);
            ctx.fillRect(25, 145, 30, 30);
            ctx.fillStyle = '#2d1228';
            ctx.fillRect(35, 35, 10, 10);
            ctx.fillRect(155, 35, 10, 10);
            ctx.fillRect(35, 155, 10, 10);
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('SCAN MENU QR', 100, 105);
            container.appendChild(canvas);
        }

        customerQRBtn.addEventListener('click', () => {
            renderQR();
            customerQRModal.style.display = 'flex';
        });

        if (closeCustomerQRModal) {
            closeCustomerQRModal.addEventListener('click', () => {
                customerQRModal.style.display = 'none';
            });
        }

        if (customerQRModal) {
            customerQRModal.addEventListener('click', (e) => {
                if (e.target === customerQRModal) {
                    customerQRModal.style.display = 'none';
                }
            });
        }

        if (copyCustomerQRLinkBtn) {
            copyCustomerQRLinkBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Customer Menu URL copied to clipboard!');
                });
            });
        }

        if (downloadCustomerQRBtn) {
            downloadCustomerQRBtn.addEventListener('click', () => {
                const el = customerQRContainer.querySelector('img') || customerQRContainer.querySelector('canvas');
                if (!el) return;
                const dataUrl = el.tagName.toLowerCase() === 'img' ? el.src : el.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = dataUrl;
                a.download = 'IndoItalianAdda_MenuQR.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }
    }

    // --- URL PARAMETERS HANDLER ---
    function checkURLParams() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const isSpot = urlParams.get('spot') === '1';
            const spotSrc = urlParams.get('src');
            const promoCode = urlParams.get('promo');

            const onspotHeaderBadge = document.getElementById('onspotHeaderBadge');
            const onspotBadgeText = document.getElementById('onspotBadgeText');

            if (isSpot || spotSrc) {
                if (onspotHeaderBadge) {
                    onspotHeaderBadge.style.display = 'inline-flex';
                }
                if (onspotBadgeText && spotSrc) {
                    onspotBadgeText.textContent = `On-Spot: ${spotSrc}`;
                }
            }

            if (promoCode && promoCodeInput && applyPromoBtn) {
                promoCodeInput.value = promoCode;
                applyPromoBtn.click();
            }
        } catch(e) {
            console.error('Error processing URL parameters:', e);
        }
    }

    // Start App
    init();
});
