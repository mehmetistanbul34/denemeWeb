$(function(){
    $.fonksiyonlar = {
        bolum_ac: function(){
            $(".bolumler").show(1500).css({
                "display" : "block"
            });
            $(".hakimizdalar").show().css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show().css({
                "display" : "none"
            });
            $(".bloglar").show().css({
                "display" : "none"
            });
            $(".imkanlarimiz").show().css({
                "display" : "none"
            });
            $(".iletisimler").show().css({
                "display" : "none"
            });
        },
        hakimizda_ac: function(){
            $(".bolumler").show().css({
                "display" : "none"
            });
            $(".hakimizdalar").show(1500).css({
                "display" : "block"
            });
            $(".aktivitelerimiz").show().css({
                "display" : "none"
            });
            $(".bloglar").show().css({
                "display" : "none"
            });
            $(".imkanlarimiz").show().css({
                "display" : "none"
            });
            $(".iletisimler").show().css({
                "display" : "none"
            });
        },
        aktiviteler_ac: function(){
            $(".bolumler").show().css({
                "display" : "none"
            });
            $(".hakimizdalar").show().css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show(1500).css({
                "display" : "block"
            });
            $(".bloglar").show().css({
                "display" : "none"
            });
            $(".imkanlarimiz").show().css({
                "display" : "none"
            });
            $(".iletisimler").show().css({
                "display" : "none"
            });
        },
        blog_ac: function(){
            $(".bolumler").show().css({
                "display" : "none"
            });
            $(".hakimizdalar").show().css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show().css({
                "display" : "none"
            });
            $(".bloglar").show(1500).css({
                "display" : "block"
            });
            $(".imkanlarimiz").show().css({
                "display" : "none"
            });
            $(".iletisimler").show().css({
                "display" : "none"
            });
        },
        imkanlar_ac: function(){
            $(".bolumler").show().css({
                "display" : "none"
            });
            $(".hakimizdalar").show().css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show().css({
                "display" : "none"
            });
            $(".bloglar").show().css({
                "display" : "none"
            });
            $(".imkanlarimiz").show(1500).css({
                "display" : "block"
            });
            $(".iletisimler").show().css({
                "display" : "none"
            });
        },
        iletisim_ac: function(){
            $(".bolumler").show().css({
                "display" : "none"
            });
            $(".hakimizdalar").show().css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show().css({
                "display" : "none"
            });
            $(".bloglar").show().css({
                "display" : "none"
            });
            $(".imkanlarimiz").show().css({
                "display" : "none"
            });
            $(".iletisimler").show(1500).css({
                "display" : "block"
            });
        },
        kapat: function(){
            $(".bolumler").show(1500).css({
                "display" : "none"
            });
            $(".hakimizdalar").show(1500).css({
                "display" : "none"
            });
            $(".aktivitelerimiz").show(1500).css({
                "display" : "none"
            });
            $(".bloglar").show(1500).css({
                "display" : "none"
            });
            $(".imkanlarimiz").show(1500).css({
                "display" : "none"
            });
            $(".iletisimler").show(1500).css({
                "display" : "none"
            });
        },


        bilisim: function(){
            alert("Bilişim Dünyasına Hoş Geldiniz . . .");
        },
        elektronik: function(){
            alert("Elektronik Dünyasına Hoş Geldiniz . . .");
        },
        insaat: function(){
            alert("İnşaat Dünyasına Hoş Geldiniz . . .");
        },
        makina: function(){
            alert("Makina Dünyasına Hoş Geldiniz . . .");
        }
    }
});