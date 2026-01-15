const _p = document.getElementById('pl');
        const _m = document.getElementById('mn');
        const _ls = document.querySelectorAll('.k');

        function move(el) {
            const r = el.getBoundingClientRect();
            const p = _m.getBoundingClientRect();

            _p.style.opacity = '1';
            _p.style.width = r.width + 'px';
            _p.style.left = (r.left - p.left) + 'px';
            _p.style.top = '50%';
            _p.style.marginTop = '-20px';
        }

        _ls.forEach(link => {
            link.onmouseenter = (e) => move(e.target);
            link.onmousedown = () => link.style.transform = "scale(0.95)";
            link.onmouseup = () => link.style.transform = "scale(1)";
        });

        _m.onmouseleave = () => {
            _p.style.opacity = '0';
        };

        window.onload = () => {
            if (_ls.length > 0) {
                move(_ls[0]);
                _p.style.opacity = '0';
            }
        };