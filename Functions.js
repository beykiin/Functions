
    // ekranaYaz()
    //

    //  function ekranaYaz2(){
    // return "Neos Yazılım Akademi"    // return olarak yazdıklarını çağırmak için bir değişkene ataman gerekir.
    //}
    //    ekranaYaz2()
    //    let x=ekranaYaz2()
    //    let y=ekranaYaz()
    //    console.log(x)

    // function ekranaYaz3(isim,soyisim){
    //     return `Benim Adım: ${isim}\n Soyadım: ${soyisim}`
    // }
    // ekranaYaz3("Ahmet","Pancar")
    // console.log(ekranaYaz3("Kaan","Özkan"))

    // var sayi=10 
    // for(let i=0;i<sayi;i+=2){
    //     console.log(i)
    // }
    // function dongu(donguKosul,artis){
    //         for(let i=0;i<donguKosul;i+=artis){
    //         console.log(i)
    //     }
    // }
    // dongu(20,5)
    // dongu(10,1)

        //Faktöriyel hesabını function dışardan değer alacak şekilde yazınız

        //BRNİM YAPTIĞIM
        //     let carpim=1
        // function faktöriyel(sayi){
        //     for(let i=1;i<=sayi;i++){
        //     carpim*=i
            
        // }
        // console.log(carpim)
        // }
        // faktöriyel(7)

        //HOCANIN YAPTIĞI
        // let deger=+prompt("Lütfen bir sayı giriniz.")
            // let sonuc=1
            
            // for(let i=1;i<=deger;i++){
            //     sonuc*=i
            // }
            // console.log(sonuc)

            // function faktöriyel(fakt){
            //     let sonuc=1
            
            // for(let i=1;i<=fakt;i++){
            //     sonuc*=i
            // }
            // console.log(sonuc)
            // }
            // faktöriyel(deger)

            //dört işlemi gerçekleştirebileceğim bir fonk yazınız. sayıları kullanıcıdan alınacak bu sayılar ve işlemler parametre olarak gönderilecek

            //BENİM YAPTIĞIM
            // var sayi1=+prompt("Lütfen birinci sayıyı giriniz: ")
            // var sayi2=+prompt("Lütfen ikinci sayıyı giriniz: ")
            // var islem=prompt("Lütfen yapmak istediğiniz işlemi giriniz")
            // function dortIslem(sayi3,sayi4,islem1)
            // for(let i=0;i<999;i++){
            
            //     switch(islem1){
            //         case "+":
            //             alert(sayi3+sayi4)
            //             break
            //         case "-":
            //             alert(sayi3-sayi4)
            //             break
            //         case "*":
            //             alert(sayi3*sayi4)
            //             break
            //         case "/":
            //             alert(sayi3/sayi4)
            //             break
            //         default:
            //             alert("Yanlış giriş yaptınız.")
            //             break
            //     }
            // }
            // dortIslem(sayi1,sayi2,islem)

            //HOCANIN YAPTIĞI
            // function dortIslem(sayi1,sayi2,islem){
            //     switch(islem){
            //         case "+":
            //             console.log(sayi1+sayi2)
            //             break
            //         case "-":
            //             console.log(sayi1-sayi2)
            //             break
            //         case "*":
            //             console.log(sayi1*sayi2)
            //             break
            //         case "/":
            //             console.log(sayi1/sayi2)
            //             break
            //     }
            // }
            // let x=+prompt("Lütfen sayi giriniz")
            // let y=+prompt("Lütfen sayi giriniz")
            // let op=prompt("Lütfen işlemi giriniz")

            // dortIslem(x,y,op) 

            //HOCANIN YAPTIĞI İKİ

            // function topla(x,y){
            //     return x+y
            // }
            // function cıkar(x,y){
            //     return x-y
            // }
            // function carp(x,y){
            //     return x*y
            // }
            // function bol(x,y){
            //     return x/y
            // }

            // function dortIslem(first,second,op){
            //     switch(op){
            //         case "+":
            //             console.log(topla(first,second))
            //             break
            //         case "-":
            //             console.log(cıkar(first,second))
            //             break
            //         case "*":
            //             console.log(carp(first,second))
            //             break
            //         case "/":
            //             console.log(bol(first,second))
            //             break
                
            //     }
            // }
            // dortIslem(5,5,"+")

            // function a(sayi){
            //     console.log("merhaba-1")
            // }
            // function a(){
            //     console.log("merhaba-2")
            // }
            // a(5)  EĞER AYNI İSİMDE İKİ FONKSİYON TANIMLIYORSAN İÇİNE PARAMETRE BİLE VERSEN EN SONDAKİNİ ÇALIŞTIRIR.


            // Metni tersten yazdıran fonksiyonu yazınız. 

// BU EKRANA YAZDIRIR AMA KONSOLA YAZDIRMAZ TERSTEN

            // let isim="Yasin Beken"

            // document.write("<bdo dir='rtl'>"+isim+"</bdo>")

            // TERSTEN KONSOLA YAZDIRMA

            // function tersten(metin){
            //     let tersMetin=""
            //     for(let i=metin.length-1;i>=0;i--){
            //         tersMetin+=metin[i]
            //     }
            //     console.log(tersMetin)
            // }
            // let isim="Yasin Beken"
            // tersten(isim)
            
// Klavyeden girilen bir metnin yarısını terse çeviren diğer yarısını ise tüm harflerini büyütenfonksiyon 
// function garip(metin){
//     let tersBuyuk=""
//     for(let i=parseInt(metin.length/2);i>=0;i--){
//         tersBuyuk+=metin[i]
//     }
//     for(let i=parseInt(metin.length/2)+1;i<metin.length;i++){
//     tersBuyuk+=metin[i].toUpperCase()
// }
//     console.log(tersBuyuk)
// }
// let isim=prompt("Lütfen bir şeyler giriniz")
// garip(isim)


//Klavyeden alınan cümlenin uzunluğu çift ise tersten yazsın tek ise bulunduğu yere göre çift olanları büyük yazsın.
// BENİM YAPTIĞIM
// function garip2(metin){
//     let tersMetin=""
//     if(metin.length%2==0){
        
//         for(let i=metin.length-1;i>=0;i--)
//         {tersMetin+=metin[i]}
//     }
//     else{
//         for(let i=0;i<metin.length;i+=2){
//             tersMetin+=metin[i].toUpperCase()
//         }

        
//     }
//     console.log(tersMetin)
// }
// let isim=prompt("Lütfen bir şey yaz.")
// garip2(isim)

// HOCANIN YAPTIĞI

// function garip2(metin){
//     let tersMetin=""
//     if(metin.length%2==0){
        
//         for(let i=metin.length-1;i>=0;i--)
//         {tersMetin+=metin[i]}
//     }
//     else{
//         for(let i=0;i<metin.length;i++){
//             if(i%2==1){
//                 tersMetin+=metin[i].toUpperCase()
//             }
//             else{
//                 tersMetin+=metin[i].toLowerCase()
//             }
//         }

        
//     }
//     console.log(tersMetin)
// }
// let isim=prompt("Lütfen bir şey yaz.")
// garip2(isim)


// Klavyeden girilen bir sayı çift ise karesi kadar a harfi basan tek ise yarısının bir fazlası kadar v harfi basan fonksiyonu yazınız


//BENİM YAPTIĞIM
// function sonuc(sayi){
//     let x=""
//     let birinci="a"
//     let ikinci="v"
//     if(sayi%2==0){
//        for(let i=0;i<(sayi**2);i++){
//         x+=birinci
//       }
//     }
//     else{
//         for(let i=0;i<(sayi/2)+1;i++){
//             x+=ikinci
//         }
//     }
//     console.log(x)
// }
// let deger=+prompt("Lütfen bir sayı giriniz.")
// sonuc(deger)

//HOCANIN YAPTIĞI
// function sonuc(sayi){
//     let x=""
    
//     if(sayi%2==0){
//        for(let i=0;i<(sayi**2);i++){
//        console.log("a")
//        x+="a"
//       }
//     }
//     else{
//         for(let i=0;i<(sayi/2)+1;i++){
//             console.log("v")
//             x+="v"
//         }
//     }
//     console.log(x)
// }
// let deger=+prompt("Lütfen bir sayı giriniz.")
// sonuc(deger)

// let fonksiyon=()=>{
//     console.log("Merhaba")
// }
// let fonksiyon1=(a,b)=>{
//     console.log(a/b)
// }
// let fonksiyon2=function(){
//     console.log("Farklı bir fonksiyon")
// }
// fonksiyon1(8,4)
// fonksiyon() 
// fonksiyon2()

// Kullanıcıdan isim soyisim numara alınacak alt alta yazacak
// let fonksiyon=(adSoyad,no)=>{
// console.log("İsim Soyisim: "+adSoyad+"\nTel No: "+no)
    

// }
// let isim=prompt("Lütfen isim soyisim giriniz: ")
// let num=+prompt("Lütfen tel no giriniz.")

// fonksiyon(isim,num)


//Taş kağıt makas oyunu
// BENİM YAPTIĞIM
// function tkm(secim1,secim2){
//     if(secim1=="Makas" && secim2=="Kağıt" || secim1=="Kağıt" && secim2=="Makas"){
//         alert("Makas kazandı")
//     }
//     else if(secim1=="Makas" && secim2=="Taş" || secim1=="Taş" && secim2=="Makas"){
//         alert("Taş kazandı")
//     }
//     else if(secim1=="Taş" && secim2=="Kağıt" || secim1=="Kağıt" && secim2=="Taş"){
//         alert("Kağıt kazandı")
//     }
//     else{
//         alert("Geçersiz işlem tekrar deneyiniz")
//     }
// }

// let sec1=prompt("Lütfen birini seçiniz: Taş,Kağıt,Makas")
// let sec2=prompt("Lütfen birini seçiniz: Taş,Kağıt,Makas")
// tkm(sec1,sec2)

//HOCANIN YAPTIĞI 
// let oyun=(birinci,ikinci)=>{
//     if(birinci==ikinci){
//         console.log("Beraber")
//     }
//     else if(birinci=="kağıt" && ikinci=="makas"){
//         console.log("Makas kazandı.")
//     }
//     else if(birinci=="taş" && ikinci=="makas"){
//         console.log("Taş kazandı.")
//     }
//     else if(birinci=="kağıt" && ikinci=="taş"){
//         console.log("Kağıt kazandı.")
//     }
    
// }
// let sec1=prompt("Taş Kağıt Makas birini seç")
// let sec2=prompt("Taş Kağıt Makas birini seç")
// oyun(sec1,sec2)

// Klavyeden girilen sayı çift ise karesini tek ise küpünü alan fonksiyonu yaz
// BENİM YAPTIĞIM 
// let soru=(sayi)=>{
//    if(sayi%2==0){
//     console.log(sayi**2)
//    }
//    else{
//     console.log(sayi**3)
//    }
// }
// let secim=+prompt("Lütfen bir sayı giriniz.")
// soru(secim)

// HOCANIN YAPTIĞI 

// let oyun2=(sayi)=>{
//     if(sayi%2==0){
//     console.log(sayi**2)
//    }
//    else{
//     console.log(sayi**3)
//    }
// }
// oyun2(15)

//Klavyeden girilen bir metin içerisinde eğer karakterler türkçe içeriyor ise bunları ingilizce haline çeviren fonksiyonu yazınız 

// let ceviri=(trMetin)=>{
//     let sonuc=""
//     for(let i=0;i<trMetin.length;i++){
//         if(trMetin[i]=="ş"){
//             sonuc+="s"
//         }
//         else if(trMetin[i]=="ç"){
//             sonuc+="c"
//         }
//         else if(trMetin[i]=="ö"){
//             sonuc+="o"
//         }
//         else if(trMetin[i]=="ü"){
//             sonuc+="u"
//         }
//         else if(trMetin[i]=="ğ"){
//             sonuc+="g"
//         }
//         else if(trMetin[i]=="ı"){
//             sonuc+="i"
//         }
//         else{
//             sonuc+=trMetin[i]
//         }
        
//     }
//     document.write("Orjinal: "+trMetin+"\n")
//     document.write("Çeviri: "+sonuc)
// }
// let girilen=prompt("Lütfen bir şeyler giriniz")
// ceviri(girilen)


    