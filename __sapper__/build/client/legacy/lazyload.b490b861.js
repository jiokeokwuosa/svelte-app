function n(n){var r=function(n){var r,e=n.dataset.src;(r=e,new Promise(function(n,e){var o=new Image;o.src=r,o.onload=n,o.onerror=e})).then(function(){n.src=e})},e=new IntersectionObserver(function(n,e){n.forEach(function(n){n.isIntersecting&&r(n.target)})},{root:null,rootMargin:"0px",threshold:.9});return e.observe(n),{destroy:function(){e.unobserve(n)}}}export{n as l};