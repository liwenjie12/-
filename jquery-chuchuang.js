
    ;(function () {
        $.fn.lunbo = function () {
            var flag=0;
            var shunxu = this.find("img");
            console.log(shunxu);
            shunxu.css({
                "top": "0px",
                "left": "0px",
                "position": "absolute"
            });
            $("<div><</div>").appendTo(this);
            $("<div>></div>").appendTo(this);
            var turn = this.find("div");
            this.find("div").eq(0).addClass("leftclick");
                // {
                // "width": "30px",
                // "height": "30px",
                // "position": "absolute",
                // "top": "50%",
                // "left": "2%",
                // "display": "block",
                // "transform": "translateY(-50%)",
                // "borderRadius": "50%",
                // "background-color": "rgba(68,68,68,0.4)",
                // "color": "white",
                // "lineHeight": "30px",
                // "textAlign": "center",
                // "fontSize": "22px",
                // "cursor": "pointer",
            // });
            this.find("div").eq(1).addClass("rightclick");
                // {
                // "width": "30px",
                // "height": "30px",
                // "position": "absolute",
                // "top": "50%",
                // "left": "98%",
                // "display": "block",
                // "transform": "translate(-100%,-50%)",
                // "backgroundColor": "rgba(68,68,68,0.4)",
                // "borderRadius": "50%",
                // "color": "white",
                // "lineHeight": "30px",
                // "textAlign": "center",
                // "fontSize": "22px",
                // "cursor": "pointer",
            // });
            var j = shunxu.length-1;
            var time = setInterval(view, 2000);
            function view() {
                shunxu.eq(j-1).fadeIn(1000).siblings("img").fadeOut(500);
                j--;
                if (j === -1)
                    j = shunxu.length-1;
                console.log(j);

            }
            this.on("mouseover", function () {
                clearInterval(time);
            });
            this.on("mouseout", function () {
                time = setInterval(view, 2000);
            });
            this.children("div").eq(1).on("click",function () {
                if(flag==1)
                return false;
                flag=1;
                shunxu.eq(j-1).fadeIn(1000).siblings("img").fadeOut(500);
                j--;
                if(j===-1)
                    j=shunxu.length-1;
                flag=0;
                console.log(j);
            });
            this.children("div").eq(0).on("click",function () {
                if(flag==1)
                return false;
                flag=1;
                if(j===shunxu.length-1)
                    j=-1;
                shunxu.eq(j+1).fadeIn(1000).siblings("img").fadeOut(500);
                j++;
                flag=0;
                console.log(j);
            });
        }
    })();
    $("div").lunbo();
