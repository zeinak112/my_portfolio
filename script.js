// <!-- <script>
// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         const ws = document.getElementById('welcome-screen');
//         const mc = document.getElementById('main-content');
//         ws.style.opacity = '0';
//         mc.classList.remove('hidden');
//         setTimeout(() => {
//             ws.remove();
//             mc.classList.remove('opacity-0');
//             mc.classList.add('opacity-100');
//             initScrollReveal();
//             initCounters();
//             startTyped();
//         }, 800);
//     }, 2400);
// });

// const cursorGlow = document.getElementById('cursor-glow');
// document.addEventListener('mousemove', e => {
//     cursorGlow.style.left = e.clientX + 'px';
//     cursorGlow.style.top  = e.clientY + 'px';
// });

// window.addEventListener('scroll', () => {
//     const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//     document.getElementById('scroll-indicator').style.width = scrolled + '%';
// });

// function initScrollReveal() {
//     const obs = new IntersectionObserver((entries) => {
//         entries.forEach((e, i) => {
//             if (e.isIntersecting) {
//                 const el = e.target;
//                 setTimeout(() => {
//                     el.classList.add('visible');
//                     if (el.classList.contains('section-heading')) el.classList.add('visible');
//                 }, i * 60);
//                 obs.unobserve(el);
//             }
//         });
//     }, { threshold: 0.12 });
//     document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .section-heading').forEach(el => obs.observe(el));
// }

// function initCounters() {
//     const obs = new IntersectionObserver((entries) => {
//         entries.forEach(e => {
//             if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); }
//         });
//     }, { threshold: 0.5 });
//     document.querySelectorAll('.count-num').forEach(el => obs.observe(el));
// }

// function animateCount(el) {
//     const target = parseInt(el.dataset.target);
//     const duration = 1200;
//     const step = target / (duration / 16);
//     let current = 0;
//     const timer = setInterval(() => {
//         current += step;
//         if (current >= target) { el.textContent = target; clearInterval(timer); }
//         else el.textContent = Math.floor(current);
//     }, 16);
// }

// function startTyped() {
//     const roles = ['Backend Developer ', 'PHP & Laravel Dev ', 'Data Analysis Enthusiast ', 'API Builder '];
//     let ri = 0, ci = 0, del = false;
//     const el = document.getElementById('typed-role');
//     if (!el) return;
//     function loop() {
//         const cur = roles[ri];
//         if (!del) {
//             el.textContent = cur.slice(0, ++ci);
//             if (ci === cur.length) { del = true; setTimeout(loop, 1800); return; }
//         } else {
//             el.textContent = cur.slice(0, --ci);
//             if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
//         }
//         setTimeout(loop, del ? 45 : 75);
//     }
//     loop();
// }

// document.addEventListener('click', e => {
//     const btn = e.target.closest('.ripple-btn');
//     if (!btn) return;
//     const rect = btn.getBoundingClientRect();
//     const r = document.createElement('span');
//     r.className = 'ripple-effect';
//     const size = Math.max(rect.width, rect.height);
//     r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
//     btn.appendChild(r);
//     setTimeout(() => r.remove(), 500);
// });

// function switchTab(name) {
//     ['projects','certificates','tech'].forEach(t => {
//         const c = document.getElementById('content-' + t);
//         const b = document.getElementById('tab-' + t);
//         c.classList.add('hidden');
//         b.classList.remove('bg-purple-600','text-white');
//         b.classList.add('text-gray-400');
//     });
//     document.getElementById('project-detail-panel').classList.add('hidden');
//     document.getElementById('content-' + name).classList.remove('hidden');
//     document.getElementById('tab-' + name).classList.add('bg-purple-600','text-white');
//     document.getElementById('tab-' + name).classList.remove('text-gray-400');
//     setTimeout(() => {
//         document.querySelectorAll('#content-' + name + ' .reveal').forEach(el => {
//             el.classList.remove('visible');
//             setTimeout(() => el.classList.add('visible'), 50);
//         });
//     }, 50);
// }

// function openProjectDetail(name) {
//     document.getElementById('content-projects').classList.add('hidden');
//     document.getElementById('detail-title').innerText = name;
//     const panel = document.getElementById('project-detail-panel');
//     panel.classList.remove('hidden');
//     panel.style.opacity = '0';
//     panel.style.transform = 'translateY(20px)';
//     requestAnimationFrame(() => {
//         panel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
//         panel.style.opacity = '1';
//         panel.style.transform = 'translateY(0)';
//     });
//     panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
// }

// function closeProjectDetail() {
//     document.getElementById('project-detail-panel').classList.add('hidden');
//     document.getElementById('content-projects').classList.remove('hidden');
// }

// function sendMessage() {
//     const btn = document.getElementById('send-text');
//     const icon = document.getElementById('send-icon');
//     btn.textContent = 'Sent!';
//     icon.className = 'fas fa-check text-xs';
//     setTimeout(() => {
//         btn.textContent = 'Send Message';
//         icon.className = 'fas fa-paper-plane text-xs';
//         document.getElementById('contact-name').value = '';
//         document.getElementById('contact-email').value = '';
//         document.getElementById('contact-msg').value = '';
//     }, 2000);
// }

// let commentCount = 1;
// function addComment(e) {
//     e.preventDefault();
//     const nameInput = document.getElementById('comment-name');
//     const msgInput  = document.getElementById('comment-msg');
//     const list      = document.getElementById('comments-list');
//     if (!nameInput.value.trim() || !msgInput.value.trim()) return;

//     const colors = ['bg-purple-600','bg-purple-600','bg-purple-600','bg-emerald-600','bg-amber-600'];
//     const color  = colors[Math.floor(Math.random() * colors.length)];

//     const div = document.createElement('div');
//     div.className = `comment-new bg-[#0b031a] p-4 rounded-xl border border-purple-950/60 flex gap-3 items-start`;
//     div.innerHTML = `
//         <div class="w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white">
//             ${nameInput.value.charAt(0).toUpperCase()}
//         </div>
//         <div>
//             <span class="text-xs font-bold text-white">${nameInput.value}</span>
//             <p class="text-xs text-gray-400 mt-1">${msgInput.value}</p>
//         </div>`;
//     list.appendChild(div);

//     commentCount++;
//     const counter = document.getElementById('comment-count');
//     counter.textContent = commentCount;
//     counter.style.transform = 'scale(1.4)';
//     setTimeout(() => counter.style.transform = 'scale(1)', 300);

//     nameInput.value = '';
//     msgInput.value  = '';
//     list.scrollTop  = list.scrollHeight;
// }
// </script> -->

