function kapat(){
    $(function(){
        $(".denemeler").hide(1500).css({
            "color" : "white",
            "border-radius" : "20px"
        });
    });
}

function ac(){
    $(function(){
        $(".bolumler").show(1500).css({
            "color" : "black",
            "border-radius" : "20px",
            "display" : "block"
        });
    });
}

$(function(){
    $.fonksiyonlar = {
        kapat: function(){
            alert("Kapatma işlemi başarılı bir şekilde tamamlamak için KAPAT buttonuna tıklauınız.");
        },
        ac: function(){
            alert("Açma işlemi başarılı bir şekilde tamamlamak için AÇ buttonuna tıklauınız.");
        }
    }
});

$(function(){
    $("ol.cakmak li").click(function(){
        var x = $(this).index();
        alert((x+1)+". Satıra Tıkladınız");
    });
    $("mehmet.sil").click(function(){
        $(".gizle").hide(1000);
    });
    $("mehmet.yaz").click(function(){
        $(".gizle").show(1000);
    });
});

$(function(){
    $(".ekle").click(function(){
        var val = $(".girdi").val();
        if(val != ""){alert(val);}else{alert("Hatalı giriş yaptınız");}
    });
});
