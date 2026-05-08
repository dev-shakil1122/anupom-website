        const projects = [
            { title: "Al Wakra Mixed-Use Tower", type: "Civil", loc: "Al Wakra", year: "2023", status: "completed", color: "t1", feat: true },
            { title: "West Bay Corporate HQ", type: "MEP", loc: "West Bay", year: "2023", status: "completed", color: "t6" },
            { title: "Lusail Residential Complex", type: "Civil", loc: "Lusail", year: "2024", status: "ongoing", color: "t2" },
            { title: "Qatar Foundation Campus Block D", type: "Renovation", loc: "Education City", year: "2022", status: "completed", color: "t4" },
            { title: "Industrial Zone Warehouse Fit-Out", type: "Fit-Out", loc: "Industrial Area", year: "2023", status: "completed", color: "t7" },
            { title: "Al Sadd Villa Compound", type: "Civil", loc: "Al Sadd", year: "2024", status: "ongoing", color: "t8" },
            { title: "Aspire Zone Facilities Maintenance", type: "Maintenance", loc: "Aspire Zone", year: "2023", status: "ongoing", color: "t9" },
            { title: "New Doha North Sewerage Network", type: "Infrastructure", loc: "North Doha", year: "2022", status: "completed", color: "t3" },
            { title: "Barwa City Phase 3", type: "Civil", loc: "Al Wakrah", year: "2024", status: "ongoing", color: "t5" },
            { title: "HMC Hospital MEP Upgrade", type: "MEP", loc: "Al Rayyan", year: "2022", status: "completed", color: "t1" },
            { title: "Msheireb Downtown Retail", type: "Fit-Out", loc: "Msheireb", year: "2023", status: "completed", color: "t6" },
            { title: "Qatar University Road Expansion", type: "Infrastructure", loc: "Al Tarfa", year: "2021", status: "completed", color: "t4" },
            { title: "Ain Khaled Villa Renovation", type: "Renovation", loc: "Ain Khaled", year: "2024", status: "ongoing", color: "t2" },
            { title: "Katara Cultural Village Maintenance", type: "Maintenance", loc: "Katara", year: "2023", status: "ongoing", color: "t8" },
            { title: "Al Khor Beach Resort Fit-Out", type: "Fit-Out", loc: "Al Khor", year: "2022", status: "completed", color: "t9" },
            { title: "Pearl Qatar Podium MEP", type: "MEP", loc: "The Pearl", year: "2023", status: "completed", color: "t7" },
            { title: "Dukhan Highway Drainage", type: "Infrastructure", loc: "Dukhan Road", year: "2021", status: "completed", color: "t3" },
            { title: "Madinat Khalifa Apartment Refurb", type: "Renovation", loc: "Madinat Khalifa", year: "2024", status: "upcoming", color: "t5" },
            { title: "QatarEnergy LNG Facilities", type: "Mechanical", loc: "Ras Laffan", year: "2023", status: "completed", color: "t1" },
            { title: "Legtaifiya Villa Compound", type: "Civil", loc: "Legtaifiya", year: "2024", status: "ongoing", color: "t6" },
            { title: "Doha Metro Station Fit-Out", type: "Fit-Out", loc: "Downtown Doha", year: "2022", status: "completed", color: "t2" },
            { title: "Mesaimeer Sports Hall MEP", type: "MEP", loc: "Mesaimeer", year: "2023", status: "completed", color: "t4" },
            { title: "Al Gharrafa Commercial Mall", type: "Civil", loc: "Al Gharrafa", year: "2024", status: "upcoming", color: "t8" },
            { title: "Zekreet Eco-Resort Construction", type: "Civil", loc: "Zekreet", year: "2023", status: "ongoing", color: "t9" },
            { title: "Hazm Al Markhiya Substation", type: "Electrical", loc: "Hazm Al Markhiya", year: "2022", status: "completed", color: "t7" },
            { title: "Nuaija Labor Camp Facility", type: "Maintenance", loc: "Nuaija", year: "2024", status: "ongoing", color: "t3" },
            { title: "Umm Salal School Block", type: "Civil", loc: "Umm Salal", year: "2021", status: "completed", color: "t5" },
            { title: "Al Messila Hotel Renovation", type: "Renovation", loc: "Al Messila", year: "2023", status: "completed", color: "t1" },
            { title: "Logistics Village Qatar Fit-Out", type: "Fit-Out", loc: "Abu Hamour", year: "2024", status: "upcoming", color: "t6" },
            { title: "Simaisma Coastal Road", type: "Infrastructure", loc: "Simaisma", year: "2022", status: "completed", color: "t2" }
        ];

        const statusCls = { completed: 'status-completed', ongoing: 'status-ongoing', upcoming: 'status-upcoming' };
        const statusLbl = { completed: 'Completed', ongoing: 'Ongoing', upcoming: 'Upcoming' };

        function renderProjects() {
            const g = document.getElementById('projGrid');
            g.innerHTML = projects.map((p, i) => `
    <div class="proj-card reveal${p.feat ? ' featured' : ''}">
      <div class="proj-thumb">
        <div class="proj-bg ${p.color}"></div>
        <div class="proj-overlay"></div>
        <div class="proj-type-badge">${p.type}</div>
        <div class="proj-title-over">${p.title}</div>
      </div>
      <div class="proj-info">
        <div class="proj-meta">
          <span><i class="ti ti-map-pin"></i>${p.loc}</span>
          <span><i class="ti ti-calendar"></i>${p.year}</span>
        </div>
        <span class="proj-status ${statusCls[p.status]}">${statusLbl[p.status]}</span>
      </div>
    </div>`).join('');
            initReveal();
        }

        function initReveal() {
            const els = document.querySelectorAll('.reveal,.proc-step');
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) { 
                        e.target.classList.add('visible'); 
                    } else {
                        e.target.classList.remove('visible');
                    }
                });
            }, { threshold: .12 });
            els.forEach(el => obs.observe(el));
        }

        function submitForm() {
            const msg = document.getElementById('successMsg');
            msg.style.display = 'block';
            setTimeout(() => msg.style.display = 'none', 5000);
        }

        function toggleMenu() {
            const nl = document.querySelector('.nav-links');
            nl.style.display = nl.style.display === 'flex' ? 'none' : 'flex';
            nl.style.flexDirection = 'column';
            nl.style.position = 'absolute';
            nl.style.top = '70px'; nl.style.left = 0; nl.style.right = 0;
            nl.style.background = '#fff'; nl.style.padding = '20px';
            nl.style.boxShadow = '0 8px 24px rgba(0,0,0,.1)';
            nl.style.zIndex = 999;
        }

        // Floating background shapes
        const bgAnim = document.getElementById('bgAnim');
        for (let i = 0; i < 18; i++) {
            const s = document.createElement('div');
            s.className = 'float-shape';
            const sz = Math.random() * 40 + 15;
            s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;background:#fff;animation-duration:${Math.random() * 20 + 15}s;animation-delay:${Math.random() * -20}s;border-radius:${Math.random() > 0.5 ? '50%' : '4px'}`;
            bgAnim.appendChild(s);
        }

        window.addEventListener('scroll', () => {
            const n = document.getElementById('navbar');
            n.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,.1)' : 'none';
        });

        renderProjects();
