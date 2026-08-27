/**
 * /uslugi/* hizmet sayfalarının Türkçe çevirisi.
 *
 * Yapı ve sıralama kaynakla (UslugiData.js) birebir aynıdır —
 * yükleyici dizileri indeks üzerinden birleştirir.
 *
 * Bilinçli olarak uyulan kurallar:
 *  • hiçbir fiyat ve hiçbir tutar yok — rakam yerine her zaman
 *    kısa bir brief gönderme daveti var;
 *  • uydurulmuş müşteri, vaka, ödül ya da referans yok;
 *  • arama motoru sıralaması ya da sonuç garantisi verilmiyor.
 */

const tr = {
  /* ══════════════════════════════════════════════════════════════
     LOGO
     ══════════════════════════════════════════════════════════════ */
  logotip: {
    h1: "Siparişe özel logo tasarımı",
    lead:
      "Logo bir resim değil, çalışan bir araçtır. Hem e-posta imzasında hem tabelada, tek renkte ve nakışta okunabilir olmalıdır. Biz bütün bu mecralara dayanan işaretler tasarlıyor, kaynak dosyaları ve kullanım kurallarıyla birlikte teslim ediyoruz.",

    sections: [
      {
        h2: "Logo tasarımına neler dahil",
        paragraphs: [
          "Logo tasarımı tek bir dosya değil, bir sistemdir. İşe brief ve konuşmayla başlıyoruz: şirket parasını nasıl kazanıyor, kime satıyor, kiminle karıştırılıyor, işaret en çok nerede yaşayacak — mobil uygulamada mı, ambalajda mı, bina cephesinde mi. Biçim doğrudan bu yanıtlara bağlıdır: uygulama simgesi için çizilen işaretle metale kazınacak işaret farklı kurallara göre kurulur.",
          "Sonrasında sektör analizi geliyor. Rakiplerin nasıl göründüğüne bakıyor, sizi pazarda benzeşmekten çıkarıp ayırt edilebilir kılacak bir alan arıyoruz. Ardından eskizleri çiziyor, iki üç yönü temiz sunumla gösteriyoruz. Yirmi seçenek değil: yirmi seçenek, çözümün bulunamadığı ve seçim sorumluluğunun müşteriye devredildiği anlamına gelir.",
          "Seçilen yönü nihai işarete kadar getiriyoruz: oranlar, optik düzeltmeler, küçük boyuttaki davranış, koruma alanı, tek renkli ve negatif sürümler. Sonuçta elinize bir dosya seti ve kısa kurallar geçiyor; logoyu bize danışmadan matbaaya, tabela üreticisine ya da yeni pazarlama sorumlunuza verebiliyorsunuz.",
        ],
      },
      {
        h2: "İşaret üzerinde nasıl çalışıyoruz",
        paragraphs: [
          "İlk eskiz stoktan seçilmez, elle çizilir. Bariz olanı bilerek eliyoruz — ilk fikirler neredeyse her zaman sizin ve rakiplerinizin de aklına gelen fikirlerdir — ve tam olarak öyle olmasının bir nedeni bulunan bir biçim ortaya çıkana kadar çalışmayı sürdürüyoruz. Bu nedeni sonradan “böylesi daha güzel” diyerek değil, sözcüklerle açıklayabiliyoruz.",
          "Her yönü boş beyaz sayfada değil, bağlamı içinde gösteriyoruz: kartvizitte, mesajlaşma uygulamasının profil görselinde, tabelada, ambalajda. Sunumda çok iyi duran bir işaret gerçek mecrada çoğu zaman dağılır — 16 pikselde okunmaz olur ya da tek renge indiğinde kaybolur. Bunu baskı aşamasında değil, onaydan önce öğrenmek daha iyidir.",
          "Tartışmayı zevk üzerinden değil, işin kendisi üzerinden yürütüyoruz. “Beğendim” ve “beğenmedim” de bilgidir, ama tam olarak neyin rahatsız ettiğini açıklamanızı rica ediyoruz: işaret ağır mı duruyor, soğuk mu, yanlış tarafa mı gönderme yapıyor, zincir bir şirketin logosuna mı benziyor. Böyle bir ifadeyle çalışılabilir. Soyut bir “bu değil” ile çalışılamaz ve bunu açıkça söylüyoruz.",
        ],
      },
      {
        h2: "Sonuçta elinize ne geçiyor",
        paragraphs: [
          "Nihai logo vektörel olarak teslim edilir — yani ne kartvizitte ne de on metrelik bir afişte kalite kaybeder. Yanında sosyal medya ve belgeler için raster sürümler, site için favicon, koyu zemin varyantı ve gofre, kazıma ve nakış için tek renkli sürüm bulunur.",
          "Dosyalarla birlikte kısa bir kılavuz geliyor: en küçük kullanım boyutu, koruma alanı, kabul edilen ve edilmeyen kullanım biçimleri, RGB, CMYK ve Pantone renk kodları. Baskı yüklenicisinin ya da yeni bir çalışanın işareti bilmeden bozmaması — yatay olarak esnetmemesi ya da desenli bir zemine koymaması — için bu kadarı yeterlidir.",
          "Onaylanan logonun münhasır hakları size geçer ve bu, sözleşmede kayda geçirilir. Büroda kalan tek hak, işi portfolyoda gösterme hakkıdır. Proje gizlilik sözleşmesi altındaysa ya da henüz yayına girmediyse, yayımlamayı onayınıza kadar erteliyor veya hiç yapmıyoruz — bu, sonradan değil, en başta konuşulur.",
        ],
      },
      {
        h2: "Süre ve süreyi etkileyenler",
        paragraphs: [
          "İşaretin tasarımı genellikle iki ila dört hafta sürer. Buradaki asıl değişken bizim çizim hızımız değil, sizin tarafınızdan gelen geri bildirimin hızıdır. İlgili bütün çalışanlardan görüş toplamak bir hafta alıyorsa, teslim tarihi tam olarak o kadar kayar; hiçbir iç süreç iyileştirmesi bunu telafi etmez.",
          "İşi hızlandıran tek somut şey şudur: nihai kararı verecek kişiyi belirleyin. Beş kişilik bir komite en iyi işareti seçmez — kimseyi rahatsız etmeyeni seçer, ki bu neredeyse her zaman seçeneklerin en soluğudur. Görüş toplamak yararlıdır; kararı oy çokluğuyla almak değil.",
          "Yolun ortasında girdilerin değişmesi işi yavaşlatır. Yön onaylandıktan sonra ad, ürün ya da hedef kitle değişirse eskiz aşamasına geri dönüyoruz. Bu olağan bir durumdur ve kozmetik bir düzeltme gibi göstermektense adını doğru koymak daha dürüsttür. Kesin süreyi ve iş kapsamını kısa bir brief'ten sonra söylüyoruz — ondan önce söylenecek her rakam uydurma olur.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Vektörel logo",
        note: "SVG, AI ve PDF. Uygulama simgesinden bina cephesindeki tabelaya kadar kalite kaybı olmadan ölçeklenir.",
      },
      {
        ru: "Raster sürümler",
        note: "Birkaç boyutta şeffaf zeminli PNG, site için favicon, sosyal medya ve mesajlaşma uygulamaları için profil görselleri.",
      },
      {
        ru: "Tek renk ve negatif",
        note: "Tek renkli sürüm ve koyu zemin varyantı — baskı, gofre, kazıma ve nakış için.",
      },
      {
        ru: "Kısa kullanım kılavuzu",
        note: "Koruma alanı, en küçük boyut, RGB / CMYK / Pantone renk kodları ve işaretle yapılmaması gerekenlerin listesi.",
      },
      {
        ru: "Kaynak çalışma dosyaları",
        note: "Katmanlı tasarım dosyaları: tek bir yükleniciye bağımlı kalmayın, projeyi başkasına devredebilin.",
      },
      {
        ru: "Hakların devri",
        note: "Onaylanan işaretin münhasır hakları sözleşme uyarınca müşteriye geçer.",
      },
    ],

    steps: [
      {
        title: "Brief ve girdiler",
        text: "40–60 dakikalık bir görüşme ve kısa bir anket: iş hedefi, hedef kitle, kullanım mecraları, nelerden hoşlandığınız ve kesinlikle istemedikleriniz. Sonucu yazılı olarak kayda geçiriyoruz — bir ay sonra neyi konuştuğumuzu tartışmamak için.",
      },
      {
        title: "Analiz ve alan",
        text: "Rakiplere ve komşu pazarlara bakıyor, sahiplenilebilecek görsel alanı belirliyoruz. Kısa bir özet sunuyoruz: bu aşamada yönü değiştirmek hâlâ ucuzdur.",
      },
      {
        title: "Eskizler ve yönler",
        text: "Seçenekleri elle çiziyor, yaşayabilir iki üç tanesini ayırıp temiz sunuma getiriyoruz — beyaz sayfada değil, doğrudan gerçek mecraların bağlamında.",
      },
      {
        title: "Seçilenin geliştirilmesi",
        text: "Oranları, optiği, küçük boyuttaki davranışı ve rengi ayarlıyoruz. Düzeltmeler turlar hâlinde ilerler; sayısı sözleşmede önceden belirlenmiştir.",
      },
      {
        title: "Teslim ve hakların devri",
        text: "Dosyaları topluyor, kısa kılavuzu yazıyor, kaynak dosyaları veriyor ve hakların devrini düzenliyoruz. Sonrasında baskı ve reklam yüklenicileriyle ilgili sorularınız için ulaşılabilir kalıyoruz.",
      },
    ],

    faq: [
      {
        q: "Logo tasarımının ücreti nedir?",
        a: "Ücret kapsama göre değişir: yalnızca işaret mi gerekiyor yoksa kullanım mecraları da mı, kaç yön gösterilecek, rakip analizi ve marka tescili için dosya hazırlığı gerekiyor mu. Bu yüzden fiyat listesi yayımlamıyoruz — işten kopuk bir rakam hem sizi hem bizi yanıltır. Kısa bir brief gönderin ya da yalnızca birkaç paragraf yazın: şirket ne yapıyor, işaret nerede yaşayacak, sonuca hangi tarihte ihtiyacınız var. Yanıt olarak iş kapsamını ve aşama aşama süreleri içeren bir teklif iletiyoruz; böylece neye ödeme yaptığınız ve kaliteden ödün vermeden nelerden vazgeçebileceğiniz görünür oluyor.",
      },
      {
        q: "İş ne kadar sürüyor?",
        a: "Genellikle sözleşmenin imzalanmasından dosyaların teslimine kadar iki ila dört hafta. Aradaki fark çizimin zorluğundan değil, sizin tarafınızdaki onay sayısından ve yanıt hızından kaynaklanır. İşi aşamalara bölüyor ve hangi günlerde sizden karar beklediğimizi önceden söylüyoruz: o günlerde yanıt gelmezse teslim tarihi aynı kadar kayar. Hızlandırılmış çalışma, başlangıçtan önce konuşulursa ve gereken günleri projeye ayırabilirsek mümkündür. Kesin takvimi brief'ten sonra teklifle birlikte alırsınız — ondan önce söylenecek her süre tahminden ibaret olur.",
      },
      {
        q: "İşe kaç düzeltme dahil?",
        a: "Tur sayısını, düzeltmeler sınırsız bir sürece dönüşmesin diye başlamadan önce sözleşmede belirliyoruz. Genellikle bu, yön aşamasında birkaç tur ve seçilen işaretin geliştirilmesinde birkaç tur demektir; projelerin büyük çoğunluğunda bu yetiyor. Onaylanan yönün içindeki düzeltmeler işe dahildir. Yön onaylandıktan sonra eskizlere dönmek ise yeni bir aşamadır ve biz buna ücretsiz bir rötuş değil, açıkça yeni aşama diyoruz. Daha az tur gerekmesi için görüşleri günde bir kişiden değil, ilgili herkesten aynı anda toplamak işe yarar.",
      },
      {
        q: "Sonuç üzerindeki haklar kime ait?",
        a: "Onaylanan logonun münhasır hakları müşteriye geçer — bu, sözleşmede yazılıdır ve dosyalarla birlikte devri belgeleyen evrakı da alırsınız. İşareti bölge ve süre sınırı olmadan kullanabilir, yüklenici değiştirebilir, marka tescili yaptırabilirsiniz. Kendimize yalnızca işi portfolyoda ve mesleki topluluklarda gösterme hakkını saklı tutuyoruz. Proje gizliyse ya da henüz yayına girmediyse, yayımlamayı izninize kadar erteliyor veya hiç yapmıyoruz — bu, sonradan karara bağlanmaz, en başta kayda geçirilir.",
      },
      {
        q: "Başlamak için bizden ne gerekiyor?",
        a: "En az düzeyde: brief'e verilen yanıtlar ve sizin tarafınızda karar veren bir kişi. Brief'te ürünü, hedef kitleyi, rakipleri, kullanım mecralarını ve size kesinlikle uymayan şeyleri soruyoruz: “olmaz” listesi, “olur” listesinden daha çok zaman kazandırır. Elinizde hazır olan malzemeleri göndermeniz de yararlı: şirket metinleri, fotoğraflar, eski tasarımlar, rakip bağlantıları. Bunların hiçbiri yoksa sorun değil, görüşmede birlikte çıkarırız. Sonrasında sizden gereken tek şey, onay aşamalarında zamanında yanıt vermek; kalanını biz üstleniyoruz.",
      },
      {
        q: "Marka tescili yapıyor musunuz?",
        a: "Tescili patent vekili yürütür — bu ayrı bir hukuk mesleğidir ve biz o rolde davranmıyoruz. Bizim payımıza düşen kısım teknik: görseli gereken formatlarda hazırlıyor ve tescile tam olarak neyin sunulacağını sizinle birlikte tanımlıyoruz. İsterseniz açık veri tabanlarına bakıp bariz benzerlikleri kontrol edebiliriz, ancak böyle bir kontrol hukuki bir görüş değildir ve tescili garanti etmez. Vekiliniz yoksa kime başvurmanın mantıklı olduğunu söyler, dosyaları genellikle istendiği biçimde teslim ederiz.",
      },
      {
        q: "Ya hiçbir yönü beğenmezsek?",
        a: "Böyle olabiliyor ve nedeni genellikle çizim değil, işin baştan yeterince net tanımlanmamış olmasıdır. Bu yüzden yönleri finalde değil, geri dönmenin hâlâ ucuz olduğu erken bir aşamada gösteriyoruz. Hiçbir seçenek tutmazsa brief'e dönüp tam olarak neyin ayrıştığını konuşuyoruz: hedef kitle mi, ton mu, çağrışımlar mı. Ardından yeni bir eskiz turu yapıyoruz; böyle bir dönüşün koşulları yazışmada doğaçlanmaz, sözleşmede önceden yazılıdır. İlk sunumun her zaman hedefi tutturacağını vaat etmiyoruz; tutturmuş gibi davranmayacağımızı vaat ediyoruz.",
      },
      {
        q: "Moskova dışındaki şirketlerle çalışıyor musunuz?",
        a: "Evet. Büro Moskova'da, ancak süreç tümüyle uzaktan yürüyor: brief ve görüşmeler video bağlantıyla, ara sunumlar ortak bir belgede yapılıyor, dosyalar bağlantıyla iletiliyor. Coğrafya ne süreyi ne de iş kapsamını etkiliyor. Farklı saat dilimlerindeki müşterilerle görüşmeler için önceden bir zaman aralığı belirliyoruz; böylece onaylar fazladan bir güne yayılmıyor. Moskova'da yüz yüze görüşmek sizin için daha uygunsa bu da mümkün, ama hiçbir aşamada zorunlu değil.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MARKALAŞMA VE KURUMSAL KİMLİK
     ══════════════════════════════════════════════════════════════ */
  brending: {
    h1: "Kurumsal kimlik tasarımı ve markalaşma",
    lead:
      "Kurumsal kimlik, adınız okunmadan önce sizi tanınır kılan kararların bütünüdür. Böyle bir sistemi baştan sona kuruyoruz: konumlandırmadan ve logodan başlayıp kullanım mecralarına, şablonlara ve sistemi ekibinizin sürdürebilmesi için gereken kurallara kadar.",

    sections: [
      {
        h2: "Kurumsal kimlik nedir ve işletmeye ne sağlar",
        paragraphs: [
          "Kurumsal kimlik güzel görsellerden oluşan bir set değil, müşterinin dikkatinden tasarruf etme biçimidir. Site, tabela, ambalaj, sunum ve sosyal medya akışı tek bir organizma gibi göründüğünde, insan markayla her karşılaşmasında kim olduğunuzu yeniden çözmek zorunda kalmaz. Tanınırlık birikir ve her yeni temas şirkete bir öncekinden daha ucuza mal olur.",
          "Tersi durum daha sık görülür: logoyu bir yüklenici çizmiş, siteyi başkası yapmış, sunumları bir müdür kendi programında topluyor, sosyal medyayı üçüncü bir kişi yürütüyor. Kâğıt üstünde her şey var ama tanınırlık yok ve reklam bütçesi boşa dönüyor. Kurumsal kimlik tam olarak bu sorunu çözer: içinde üretilen her yeni mecranın “size ait” görünmesini sağlayan çerçeveyi kurar.",
          "Bu yüzden neredeyse her zaman çizimle değil, konumlandırmayla başlıyoruz: şirket gerçekte ne satıyor, kime satıyor, pazardaki komşularından nerede ayrılıyor ve bunu hangi sözcüklerle anlatıyor. Bu olmadan kimlik bir zevk meselesine dönüşür ve herkesin güzellik tanımının farklı olduğu ilk toplantıda dağılır.",
        ],
      },
      {
        h2: "Marka üzerindeki çalışmamız nasıl ilerliyor",
        paragraphs: [
          "İlk aşama araştırma ve konuşmalar. Pazarı inceliyor, doğrudan rakiplere ve komşu kategorilere bakıyor, şirketin bugün nasıl göründüğünü ve bunun neresinin işe yaradığını çözümlüyoruz. En değerli bilgi çoğu zaman çalışanlarla yapılan görüşmelerden gelir: satış ekibinin ürünü müşteriye anlatma biçimi, genellikle herhangi bir misyon belgesinden daha isabetlidir.",
          "Ardından marka platformunu yalın bir dille tanımlıyoruz: öz, fark, ton ve vaat. Bu, kırk sayfalık bir cilt değil, kısa bir belgedir — gerçekten kullanılması gerekir. Görsel dil bunun üzerine kurulur: işaret, palet, tipografi, sayfa düzeni ilkeleri, grafik ögeler, fotoğrafa ve illüstrasyona yaklaşım.",
          "Sonra sistem mecralarda sınanır. Soyut örnekler değil, tam olarak sizin ihtiyacınız olanları hazırlıyoruz: ambalaj, tabela, personel kıyafeti, sunum ve gönderi şablonları, belgeler, satış noktası düzeni. Sistemin nerede fazla katı kaldığı, nerede seçenek eksiği olduğu tam da bu aşamada görünür — ve kuralları teslimden sonra değil, teslimden önce tamamlıyoruz.",
        ],
      },
      {
        h2: "Yeniden markalaşma: gerçekten ne zaman gerekir",
        paragraphs: [
          "Yeniden markalaşmaya, görsel imaj işe engel olduğunda girişmek gerekir: şirket büyüyüp artık başka bir müşteriye satıyorsa, fiyat ve konumlandırma değişmişse, eski sisteme sığmayan yeni iş kolları ortaya çıkmışsa ya da kimlik o kadar eskide kalmışsa ki kendine önem vermemek gibi okunuyorsa. Bunlar içeriğe dayalı nedenlerdir ve tasarımla çözülür.",
          "“Bıktık” ve “rakibinki daha canlı” ise kötü gerekçelerdir. Kimlik değişimi birikmiş tanınırlığın bir bölümünü sıfırlar ve onu yeniden biriktirmek gerekir. Bazen yeniden markalaşma talebine dürüst yanıt şudur: değişmesi gereken logo değil, site, fotoğraflar ya da iletişim tonudur. Bunu, siparişin hacmini küçültse bile açıkça söylüyoruz.",
          "Değişim yine de gerekiyorsa, değişimin derinliğini ayrıca konuşuyoruz. Evrimsel yol tanınırlığı korur ve uygulamayı yeniler: aynı anlamlar, çağdaş sunum. Devrimci yol ise iş modeli değiştiğinde ya da geçmişle itibar bağı koptuğunda yerindedir. Bu seçim hem bütçeyi hem de geçiş planını etkiler: eski mecralar bir günde ortadan kalkmaz ve değiştirilme sıraları önceden planlanmalıdır.",
        ],
      },
      {
        h2: "Elinize ne geçiyor ve süreyi ne etkiliyor",
        paragraphs: [
          "Sonuçta bütün sürümleriyle logoyu, renk ve tipografi sistemini, grafik ögeleri, üzerinde anlaşılan mecraların tasarımlarını, düzenli işler için şablonları ve kurallarla örnekleri içeren bir belge olan marka kitabını alıyorsunuz. Hepsi kaynak dosyalarıyla birlikte: katmanlı tasarımlar, lisanslarıyla yazı tipleri ya da bunlara giden bağlantılar — herhangi bir yükleniciye devredilmeye hazır.",
          "Marka kitabını rafta duracak bir albüm gibi değil, insanın kullanacağı bir kılavuz gibi yazıyoruz. İçinde gerçekten ortaya çıkan soruların yanıtları var: logonun boşluğu ne kadar, Word belgelerinde hangi yazı tipi kullanılır, zemin desenliyse ne yapılır, bir gönderi nasıl düzenlenir, teklif nasıl hazırlanır. Bu kurallar ne kadar anlaşılırsa, sistem bizsiz o kadar uzun yaşar.",
          "Süre kapsama bağlıdır: küçük bir şirketin kimliği birkaç haftada toparlanır, araştırmayı ve onlarca mecrayı kapsayan tam bir markalaşma ise aylar alır. Takvimi en çok onay hızı ve girdilerin eksiksizliği etkiler — mecra listesi yol boyunca netleşiyorsa plan kayar. İş kapsamını, aşamaları ve süreyi kısa bir brief'in ardından teklifte sabitliyoruz.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Marka platformu",
        note: "Kısa bir belge: öz, rakiplerden fark, ton ve vaat — gerçekten kullanılabilecek bir dille.",
      },
      {
        ru: "Logo ve sürümleri",
        note: "Ana işaret, yatay ve kompakt kurgular, tek renk, negatif — vektörel ve raster olarak.",
      },
      {
        ru: "Görsel sistem",
        note: "Kodlarıyla palet, tipografi, ızgaralar, grafik ögeler, fotoğraf ve illüstrasyon ilkeleri.",
      },
      {
        ru: "Mecra tasarımları",
        note: "Tam olarak size gerekenler: ambalaj, matbu işler, tabela, kıyafet, satış noktası düzeni, belgeler.",
      },
      {
        ru: "Ekip için şablonlar",
        note: "Sunumlar, gönderiler, teklifler — tasarımcı olmadan doldurulabilen hazır kalıplar.",
      },
      {
        ru: "Marka kitabı ve kaynak dosyalar",
        note: "“Böyle” ve “böyle değil” örnekleriyle kurallar, katmanlı çalışma dosyaları, lisanslı ya da bağlantılı yazı tipleri.",
      },
    ],

    steps: [
      {
        title: "Brief ve derinleşme",
        text: "İşi çözümlüyoruz: ürün, hedef kitle, satış kanalları, yıllık planlar. Yalnızca yöneticiyle değil, satan ve müşteriye hizmet veren kişilerle de konuşuyoruz.",
      },
      {
        title: "Pazar araştırması",
        text: "Rakiplere ve komşu kategorilere bakıyor, sektörün görsel kesitini çıkarıyor ve sahiplenilmemiş alanı arıyoruz. Bulguları, herhangi bir şey çizmeden önce paylaşıyoruz.",
      },
      {
        title: "Marka platformu",
        text: "Özü, farkı ve tonu yalın sözcüklerle tanımlayıp onaylatıyoruz. Bu, sonraki bütün görsel kararların dayanağıdır.",
      },
      {
        title: "Kimlik",
        text: "İşareti, paleti, tipografiyi ve grafik dili geliştiriyoruz. Yönleri beyaz zeminde değil, gerçek mecraların bağlamında gösteriyoruz.",
      },
      {
        title: "Mecralar ve şablonlar",
        text: "Sistemi üzerinde anlaşılan mecra listesinde açıyor ve ekibinizin kendi başına kullanacağı şablonları hazırlıyoruz.",
      },
      {
        title: "Marka kitabı ve devir",
        text: "Kuralları yazıyor, kaynak dosyaları topluyor, dosyaları teslim ediyor ve sistemin benimsenip sürdürülebilmesi için ekiple bir aktarım toplantısı yapıyoruz.",
      },
    ],

    faq: [
      {
        q: "Kurumsal kimlik tasarımının ücreti nedir?",
        a: "Buradaki aralık geniştir, çünkü “kurumsal kimlik” her şirkette başka bir şey demektir: kimine bir işaret ve asgari bir mecra seti yeter, kimine pazar araştırması, marka platformu, ambalaj, satış noktası düzeni ve marka kitabı gerekir. Bütün bu durumlar için tek bir rakam yayımlamak dürüst olmazdı. Bize şirketin ne yaptığını, elinizde nelerin hazır olduğunu ve önümüzdeki yıl hangi mecraların gerekeceğini yazın — aşamalara bölünmüş bir teklifle döneriz. Böyle bir teklifte neyin şimdi yapılabileceği, neyin kayıp yaşanmadan bir sonraki adıma bırakılabileceği görünür olur.",
      },
      {
        q: "Markalaşma ne kadar sürüyor?",
        a: "Küçük bir şirket için derli toplu bir kimlik birkaç haftada toparlanır. Araştırma, platform, geniş bir mecra seti ve marka kitabı içeren tam kapsamlı bir markalaşma ise aylar alır — sonucu yıllarca yaşayacak bir iş için bu olağan bir süredir. Projeyi, kabul noktaları belli aşamalara bölüyoruz; böylece nihai sunumu körlemesine beklemek yerine ilerlemeyi sürekli görüyorsunuz. Takvim brief'ten sonra hazırlanır ve mecraların hacmine, sizin tarafınızdaki onayların hızına bağlıdır.",
      },
      {
        q: "İşe kaç düzeltme dahil?",
        a: "Her aşamadaki tur sayısı, başlamadan önce sözleşmede sabitlenir. Onaylanan yönün içindeki düzeltmeler işe dahildir — bu bir lütuf değil, normal sürecin parçasıdır. Kabul edilmiş bir aşamaya geri dönmek ayrı bir iş sayılır ve bunu yazışmanın içinde eritmeden açıkça söylüyoruz. Deneyim gösteriyor ki görüşler ilgili herkesten aynı anda toplandığında ve nihai kararı veren tek bir kişi olduğunda daha az tur gerekiyor. Bu kişiyi ilk görüşmede belirlemenizi rica ediyoruz.",
      },
      {
        q: "Kurumsal kimlik üzerindeki haklar kime ait?",
        a: "Onaylanan tasarımların ve işaretin münhasır hakları sözleşme uyarınca müşteriye geçer — bunları sınırsız kullanabilir, geliştirebilir ve başka yüklenicilere devredebilirsiniz. Yazı tipleri ayrıca konuşulur: sistemde ticari yazı tipleri kullanılıyorsa lisans sizin şirketiniz adına alınır ve hangisinin gerektiğini önceden söyleriz. Proje kapsamında üretilen illüstrasyonlar ve fotoğraflar da geri kalanla birlikte devredilir. Büroda kalan tek hak, işi portfolyoda gösterme hakkıdır; proje gizliyse yayım ertelenir ya da hiç yapılmaz.",
      },
      {
        q: "Başlamak için bizden ne gerekiyor?",
        a: "Brief'e verilen yanıtlar, kısa görüşmeler için birkaç kişiye erişim ve nihai karar yetkisi olan bir kişi. Elinizde hazır olan her şeyi göndermeniz yararlı: mevcut tasarımlar, fotoğraflar, metinler, sunumlar, satış verileri, güçlü bulduğunuz rakiplerin listesi. Ayrıca önümüzdeki yıl gerekecek mecraların listesini çıkarmanızı rica ederiz — hem kapsam hem ücret buna bağlıdır. Bu liste şimdilik belirsizse ilk görüşmede birlikte oluştururuz: bu, size verilmiş bir ev ödevi değil, işin parçasıdır.",
      },
      {
        q: "Marka kitabı ile kılavuz arasındaki fark nedir?",
        a: "Kılavuz görsel kuralları anlatır: logo nasıl kurulmuş, hangi renkler ve yazı tipleri kullanılır, boşluklar nedir, işaretle ne yapılamaz. Bu, tasarımcılar ve yükleniciler için teknik bir belgedir. Marka kitabı daha geniştir: görsel bölümün yanı sıra anlamı da açıklar — kimsiniz, kimin için varsınız, nerede ayrışıyorsunuz, hangi dille konuşuyorsunuz. Küçük bir şirkete genellikle özenli bir kılavuz ve bir şablon seti yeter; tam kapsamlı marka kitabı, marka üzerinde çok kişinin çalıştığı ve kararların farklı departmanlarda alındığı yerlerde gerekir. Formatı fiyat listesine göre değil, işin gereğine göre öneriyoruz.",
      },
      {
        q: "Logoyu değiştirmeden kimliği yenilemek mümkün mü?",
        a: "Evet ve bu çoğu zaman en makul çözümdür. Logo sistemin en hantal parçasıdır: tabelalarda, belgelerde ve müşterilerin belleğinde çoktan yerini almıştır. Buna karşılık palet, yazı tipleri, sayfa düzeni, fotoğraflar ve sosyal medyadaki sunum daha hızlı eskir — yaş hissini yaratan da tam olarak bunlardır. İşareti olduğu gibi bırakıp çevresindeki her şeyi yeniden kurabiliriz; gerekirse biçimini değiştirmeden logonun kendisinde özenli bir teknik rötuş da yapabiliriz. Brief'te neyin işe yaradığını, neyin engel olduğunu çözümleyip etki yaratan en küçük müdahaleyi öneriyoruz.",
      },
      {
        q: "Proje teslim edildikten sonra kimliği kim sürdürecek?",
        a: "Sistemi, ekibinizin sürdürebileceği biçimde kuruyoruz: şablonlar, anlaşılır kurallar ve belgeyi onu kullanacak kişilerle birlikte incelediğimiz bir aktarım toplantısı. Sonrasında iki senaryo mümkün. Birincisi, siz kendi başınıza çalışırsınız, biz ortaya çıktıkça soruları yanıtlarız. İkincisi, düzenli desteği üstleniriz: yeni mecralar, sezonluk malzemeler, yüklenicilere yardım. İkinci seçenek ayrıca sözleşmeye bağlanır ve zorunlu bir koşul değildir — sistem, siz bizsiz devam etmeye karar verdiniz diye bozulmamalıdır.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     WEB SİTESİ GELİŞTİRME
     ══════════════════════════════════════════════════════════════ */
  "sozdanie-saytov": {
    h1: "Siparişe özel web sitesi geliştirme",
    lead:
      "Site kurucularda bloklardan toplanan değil, kodla yazılan siteler yapıyoruz. Tasarım, kodlama, animasyon ve teknik optimizasyon tek bir ekibin içinde; bu yüzden yükleme hızından ve telefondaki davranıştan, tasarımı çizen kişi sorumlu oluyor.",

    sections: [
      {
        h2: "Ne tür siteler yapıyoruz",
        paragraphs: [
          "Landing page — tek bir hizmet, tek bir teklif ve net bir hedef olduğunda: form, randevu, arama. Böyle bir sayfa tek bir eylemin çevresinde kurulur; üzerindeki her şey ya o eyleme götürür ya da o eylemi engelleyen bir itirazı ortadan kaldırır. Fazladan bölümler burada güven eklemez, dikkati dağıtır.",
          "Kurumsal site, hizmet sayısı birden fazlaysa, hedef kitleler farklıysa ve her birinin aramadan kendi sayfasını bulması önemliyse gerekir. Burada bir yapı ortaya çıkar: ayrı hizmet sayfaları, portfolyo, blog, kurumsal sayfa. Bölümler hem insanlar hem arama motorları için önemlidir — arama motorları siteleri değil sayfaları sıralar ve tek bir genel “Hizmetler” sayfası, dört isabetli sayfaya karşı kaybeder.",
          "E-ticaret sitesi ve katalog ayrı bir iş sınıfıdır: ürün kartı, filtreler, stok durumu, sepet, ödeme, veri aktarımları. Burada tasarım ürün mantığına tabidir, tersi değil. Ayrıca personel için iç ekranlar da yapıyoruz — yönetim panelleri, mutfak ekranları, sipariş arayüzleri — çünkü site çoğu zaman her gün kullanılan bir sistemin yalnızca girişidir.",
        ],
      },
      {
        h2: "Süreç nasıl işliyor",
        paragraphs: [
          "Yapıdan değil, işin kendisinden başlıyoruz. Siteye kimin geldiğini, ne yapması gerektiğini ve bunu şu anda yapmasını neyin engellediğini anlamamız gerekiyor. Yanıtlara dayanarak yapıyı ve prototipi kuruyoruz: renksiz, süssüz bir blok yerleşimi. Prototipi onaylamak daha hızlı ve daha ucuzdur — bu aşamada bir bölümü taşımak iki gün değil, on dakika sürer.",
          "Sonra tasarım. Ana ekranları masaüstü ve mobil sürümüyle birlikte, aynı anda çiziyoruz: trafiğin yarısından fazlası telefondan geliyor ve “sonra uyarlarız”, kullanışsız bir site elde etmenin yoludur. Aynı anda hareketi de tasarlıyoruz: bizde animasyon süs değil, ekranlar arasındaki ilişkileri göstermenin ve dikkati gereken yerde tutmanın bir yoludur.",
          "Ardından geliştirme. Kodu Next.js ve React ile yazıyor, formları, analitiği ve gereken entegrasyonları bağlıyor, hızı ve gerçek cihazlardaki davranışı kontrol ediyoruz. Teslimde her şeyin erişimini veriyoruz: depo, hosting, alan adı, yönetim paneli. Müşteri yüklenicinin rehinesi olmamalı — bu bir seçenek değil, ilkedir.",
        ],
      },
      {
        h2: "Neden site kurucu kullanmıyor, kod yazıyoruz",
        paragraphs: [
          "Site kurucu, bir varsayımı sınamak için gayet normal bir araçtır: bir hafta sonunda bir sayfa elde eder ve talep olup olmadığını anlarsınız. Sorunlar sonra başlar. Şablon, size gerekmeyen kodu da beraberinde getirir ve bu doğrudan yükleme hızını vurur — hız ise Google ve Yandex'in sıralama etkenleri arasındadır ve ziyaretçinin sayfanın yüklenmesini bekleyip beklemeyeceğini etkiler.",
          "İkinci sınır, olanakların tavanıdır. Standart dışı herhangi bir mekanik, karmaşık bir animasyon, alışılmadık bir ürün kartı ya da muhasebe sisteminizle entegrasyon, kurucunun bunu yapamadığı noktaya toslar. Üçüncü taraf bileşenlerle dolanmak, platformun ilk güncellemesine kadar çalışır. Kendi kodunuzun böyle sınırları yoktur: projeye tam olarak ne gerekiyorsa onu yapıyoruz.",
          "Üçüncüsü kontrol. Site kurucuda yapılan bir site platformun kurallarıyla yaşar: tarifeler, kısıtlar, işaretlemeye erişim, servis kapanırsa projenin akıbeti. Next.js ile yazılmış bir site ise sizin deponuzdur; herhangi bir hosting'e taşınabilir ve herhangi bir geliştiriciye devredilebilir. Kodu eksiksiz teslim ediyor ve müşteriyi teknik olarak kendimize bağlamıyoruz.",
        ],
      },
      {
        h2: "Elinize ne geçiyor",
        paragraphs: [
          "Güncel tarayıcılarda ve gerçek telefonlarda sınanmış, duyarlı kodlamaya sahip çalışan bir site. Teknik SEO temeli hazır: benzersiz sayfa başlıkları ve açıklamaları, canonical adresler, site haritası, robots.txt, Schema.org işaretlemesi, doğru başlık hiyerarşisi ve bağlantılarla görsellerde anlamlı metinler.",
          "Erişimlerin tamamını veriyoruz: depodaki kaynak kod, hosting, alan adı, e-posta ve öngörülmüşse içerik düzenleme paneli. Metinleri ve görselleri nasıl değiştireceğinizi bir görüşmede gösteriyor, kısa bir yönerge bırakıyoruz. Analitiği hemen bağlıyoruz — Yandex.Metrika ve Google Analytics — yoksa bir ay sonra trafikte ne olup bittiğini anlamak imkânsız olur.",
          "Neyi vaat etmediğimizi de ayrıca söyleyelim: aramada belirli sıralar ve belirli sayıda talep. Bunu kimse dürüstçe garanti edemez — sonuçları rekabet, alan adının yaşı, dış bağlantılar ve kullanıcı davranışı etkiler. Biz kendi alanımızdakinden sorumluyuz: hız, temiz kod, aramalara uygun yapı ve sayfanın tanıtıma teknik hazırlığı.",
        ],
      },
      {
        h2: "Süre ve süreyi etkileyenler",
        paragraphs: [
          "Landing page genellikle birkaç hafta alır, kurumsal site belirgin biçimde daha uzun, katalogu ve entegrasyonları olan bir mağaza ise en uzun. Kesin süre sayfa sayısına değil, benzersiz ekranların sayısına ve standart dışı mekaniğe bağlıdır: aynı türden yirmi ürün kartı, farklı mantıkla çalışan üç sayfadan daha hızlı yapılır.",
          "Takvimi en çok iki şey kaydırır. Birincisi içerik. Metinler, fotoğraflar ve ürün verileri bir ay boyunca parça parça geliyorsa, site daha erken hazır olamaz. Metinlerde yardımcı olabilir, nasıl bir çekim gerektiğini söyleyebiliriz, ama işinizle ilgili malzemeler yine de sizin katılımınızla doğar.",
          "İkincisi, başkalarının sistemleriyle entegrasyonlar: depo, CRM, ödeme servisi, kargo firması. Burada hız, karşı taraftaki dokümantasyona ve teknik desteğe bağlıdır ve bu, plana ayrı bir aşama olarak payıyla birlikte dürüstçe yazılır. İş kapsamını, aşamaları ve süreyi kısa bir brief'in ardından teklifte sabitliyoruz — brief'ten önce söylenecek her rakam tahmin olur.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Kendi alan adınızda site",
        note: "Yayına alınmış ve çalışan bir proje: duyarlı kodlama, güncel tarayıcılarda ve gerçek telefonlarda kontrol.",
      },
      {
        ru: "Kaynak kod",
        note: "Deponun tamamı, sizin hesabınıza erişimle. Proje taşınabilir ve başka bir geliştiriciye devredilebilir.",
      },
      {
        ru: "Tasarım dosyaları",
        note: "Bütün ekranların masaüstü ve mobil sürümleri; katmanlar ve bileşenlerle birlikte.",
      },
      {
        ru: "Teknik SEO temeli",
        note: "Meta etiketler, canonical, sitemap.xml, robots.txt, Schema.org işaretlemesi, anlamlı başlık hiyerarşisi.",
      },
      {
        ru: "Analitik ve formlar",
        note: "Yandex.Metrika ve Google Analytics, siteden gelen taleplerin e-postaya ya da mesajlaşma uygulamasına iletilmesi — kurulmuş ve sınanmış.",
      },
      {
        ru: "Erişimler ve yönerge",
        note: "Hosting, alan adı, düzenleme paneli ve metinlerle görselleri güncellemeye dair kısa bir yönerge.",
      },
    ],

    steps: [
      {
        title: "Brief ve hedef",
        text: "Siteye kimin geldiğini, ne yapması gerektiğini ve şu anda bunu yapmasını neyin engellediğini çözümlüyoruz. Projenin ölçülebilir hedefini kayda geçiriyoruz.",
      },
      {
        title: "Yapı ve prototip",
        text: "Sayfa haritasını ve renksiz blok yerleşimini hazırlıyoruz. Prototipi onaylamak, bitmiş tasarımı yeniden yapmaktan daha hızlı ve daha ucuzdur.",
      },
      {
        title: "Ekran tasarımı",
        text: "Ana ekranları doğrudan masaüstü ve mobil sürümde çiziyor, hareketi ve arayüz durumlarını tasarlıyoruz.",
      },
      {
        title: "Geliştirme",
        text: "Kodu Next.js ve React ile yazıyor, formları, analitiği ve entegrasyonları bağlıyor, hızı ve gerçek cihazlardaki davranışı kontrol ediyoruz.",
      },
      {
        title: "Test ve yayına alma",
        text: "Tarayıcıları, telefonları ve senaryoları tek tek geçiyor, alan adını ve hosting'i ayarlıyor, yayına alıyor ve bütün erişimleri devrediyoruz.",
      },
      {
        title: "Yayından sonra",
        text: "İçeriği nasıl güncelleyeceğinizi gösteriyor, sorularınızı yanıtlıyor ve gerekirse projeyi düzenli desteğe alıyoruz.",
      },
    ],

    faq: [
      {
        q: "Web sitesi geliştirmenin ücreti nedir?",
        a: "Fiyatı sayfa sayısı değil, benzersiz ekranların sayısı ve mekaniğin karmaşıklığı belirler. Tek hedefli bir landing page ile katalogu, filtreleri ve depo entegrasyonu olan bir mağaza farklı büyüklükte işlerdir; ikisi için ortak bir rakam anlamsızdır. İşi iki üç paragrafta anlatın: nasıl bir iş, ziyaretçi ne yapmalı, hangi entegrasyonlar gerekiyor, tasarım ve metinler var mı. Aşamalara bölünmüş bir teklifle döner, ilk sürümde neyin yayına alınabileceğini ve neyin sonraya bırakılabileceğini belirtiriz — böylece proje daha hızlı ve daha ucuza başlar.",
      },
      {
        q: "Geliştirme ne kadar sürüyor?",
        a: "Landing page birkaç hafta, kurumsal site daha uzun, katalogu ve entegrasyonları olan mağaza en uzun sürer. Süre; benzersiz ekranların sayısından, standart dışı mekanikten ve içeriğin ne kadar hızlı geldiğinden oluşur. Kabul noktaları belli aşamalarla çalışıyoruz: yapı, tasarım, geliştirme, test — sonucu sürekli görüyorsunuz. Takvim brief'ten sonra teklifte sabitlenir ve içinde sizden malzeme ya da karar beklediğimiz günler ayrıca işaretlenir: yayın tarihini genellikle tam da bu duraklamalar kaydırır.",
      },
      {
        q: "İşe kaç düzeltme dahil?",
        a: "Turlar her aşama için sözleşmede sabitlenir — prototipte, tasarımda ve tamamlanmış kodlamada. Onaylanan aşamanın içindeki düzeltmeler işe dahildir. Daha önce kabul edilmiş bir kararı geçersiz kılan değişiklikler — örneğin kodlama aşamasında yeni bir yapı — ayrı bir iş olarak düzenlenir, çünkü bu bir rötuş değil, yeniden yapımdır. Bunu sonradan fatura çıkararak değil, en baştan söylüyoruz. Düzeltmelerin az olması için prototipi tasarımdan önce onaylatıyoruz: şemada bir bloğu taşımak dakikalar, hazır kodda ise günler alır.",
      },
      {
        q: "Site, kod ve erişimler kime ait?",
        a: "Hepsi müşteriye aittir. Kaynak kod sizin hesabınızdaki depoya aktarılır, alan adı sizin adınıza kaydedilir, hosting sizin bilgilerinizle açılır. Tasarım dosyalarını kaynak biçiminde alırsınız. Sonuç üzerindeki haklar sözleşme uyarınca geçer; buna projeyi başka geliştiricilerle geliştirme hakkı da dahildir — kendimize teknik bağımlılık kurmuyoruz. Projede ücretli yazı tipleri, üçüncü taraf servisler ya da özel koşullu kütüphaneler kullanılıyorsa bunu önceden söyler, lisansları büro adına değil, sizin şirketiniz adına düzenleriz.",
      },
      {
        q: "Başlamak için bizden ne gerekiyor?",
        a: "İşin ne olduğuna dair net bir görüş ve karar yetkisi olan bir kişi. Başlangıçta gerekenler: işin ve hizmetlerin tanımı, hedef kitle hakkında bir fikir, beğendiğiniz ve beğenmediğiniz site örnekleri ve nedenlerinin açıklaması. Sonrasında içerik: metinler, fotoğraflar, varsa logo ve kurumsal kimlik, katalog için ürün verileri. İçerik yoksa bunu hemen söyleyin: metin yapısında yardımcı olur, nasıl bir çekim gerektiğini söyleriz, ama bunu plana yazarız. Malzemenin sessizce beklenmesi, teslim tarihinin kaymasının en sık nedenidir.",
      },
      {
        q: "Site kurucularla site yapıyor musunuz?",
        a: "Kural olarak hayır. Kodu Next.js ve React ile yazıyoruz, çünkü bu yükleme hızı, mekanikte serbestlik ve proje üzerinde tam kontrol sağlıyor. Site kurucu tek bir senaryoda yerindedir: yeni bir hizmete olan talebi en az yatırımla, birkaç gün içinde sınamak gerektiğinde. İşiniz tam olarak buysa bunu açıkça söyler, sıfırdan geliştirme satmaya çalışmayız. Varsayım doğrulandığında, kurucuda toplanmış prototip düzgün bir site için iyi bir teknik şartname olur.",
      },
      {
        q: "Aramada birinci sırayı garanti ediyor musunuz?",
        a: "Hayır ve bunu kimse dürüstçe garanti edemez. Sıralamalar; sektördeki rekabete, alan adının yaşına, dış bağlantılara, ziyaretçi davranışına ve bizden bağımsız olarak değişen algoritmalara bağlıdır. Biz kendi kontrol alanımızdaki teknik kısımdan sorumluyuz: yükleme hızı, temiz başlık yapısı, benzersiz meta etiketler, site haritası, işaretleme, belirli aramalar için ayrı sayfalar ve bağlanmış analitik. Bu, olmadan tanıtımın hiç işlemediği temeldir. Sonrası içerik ve zaman ister — bunu da sözleşme imzalanmadan önce söylüyoruz.",
      },
      {
        q: "Yayından sonra siteyi destekliyor musunuz?",
        a: "Evet, ama bu otomatik bir koşul değil, ayrı bir anlaşmadır. Teslimden sonra metinleri ve görselleri kendi başınıza nasıl değiştireceğinizi gösteriyor ve kısa bir yönerge bırakıyoruz — çoğu kişiye bu yetiyor. Düzenli çalışma gerekiyorsa desteği sözleşmeye bağlıyoruz: bağımlılıkların güncellenmesi, küçük geliştirmeler, yeni bölümler, analitik ve içerik desteği. Bizim hatamızdan kaynaklanan ve yayından sonra ortaya çıkan hataları, sözleşmede belirlenen garanti süresi içinde düzeltiyoruz. Desteğin koşulları ve kapsamı, işe başlamadan önce teklifle birlikte konuşulur.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     3D GÖRSELLEŞTİRME VE MOTION
     ══════════════════════════════════════════════════════════════ */
  "3d-vizualizaciya": {
    h1: "Siparişe özel 3D görselleştirme ve motion tasarım",
    lead:
      "3D, henüz var olmayanı gösterir: baskıya girmemiş ürünü, inşa edilmemiş binayı, çekilmesi imkânsız bir sahneyi. Böyle kareleri baştan sona biz kuruyoruz — modelden ve malzemelerden ışığa ve animasyona kadar — ve baskıya, siteye, sosyal medyaya hazır formatlarda teslim ediyoruz.",

    sections: [
      {
        h2: "Neleri görselleştiriyoruz",
        paragraphs: [
          "Ürün. Çekim yapacak bir şey olmadığında ya da çekim pahalı olduğunda ambalajın, şişenin, cihazın veya mobilyanın render'ı: baskı henüz yapılmamış, numune tek kopya hâlinde duruyor, ürün kartının ise şimdi yayına girmesi gerekiyor. Hazır tek bir modelden sınırsız sayıda açı, zemin ve düzenleme varyantı çıkar — stüdyoda her seferinde yeniden kurulması gerekecek olanlar da dahil.",
          "Mimari, iç mekânlar ve çevre düzenlemesi. Bina, meydan, park, çeşme, giriş bölümü — işveren, yatırımcı ya da komisyona işler başlamadan gösterilmesi gereken her şey. Burada ışık ve malzemeler özellikle önemlidir: inandırıcı bir görselleştirmeyi, düzgün ama plastik görünen ve kimsenin inanmadığı bir resimden ayıran şey tam olarak bunlardır.",
          "Sosyal medya ve site için motion ve grafik. Ürünün döndüğü kısa videolar, parçalarına ayrılma animasyonları, hareketli açılışlar ve geçişler, doğrudan tarayıcıda çalışan 3D sahneler. Böyle bir içerik, sabit karenin kaydırılıp geçildiği yerde dikkati tutar ve yeniden üretim gerektirmeden farklı mecralara göre kırpılabilir.",
        ],
      },
      {
        h2: "Sahne üzerindeki çalışma nasıl kuruluyor",
        paragraphs: [
          "Önce referanslar ve neyi göstereceğimiz konusunda anlaşma. Bize çizimler, ölçüler, malzeme numuneleri, gerçek nesnenin ya da ambalajın fotoğrafları ve teknik özellikler gerekiyor. Girdiler ne kadar kesinse düzeltme turu o kadar az olur: göz kararı seçilmiş bir plastik tonu neredeyse her zaman değiştirilmek zorunda kalır ve nihai render'dan sonra malzemeyi yeniden ayarlamak zaman demektir.",
          "Sonra modelleme ve kaba kurgu. Bu aşamada malzemesiz gri sahneyi gösteriyoruz: geometri, açı, kare kompozisyonu. Onayın tam burada verilmesi gerekir — gri hâldeyken kamera noktasını değiştirmek dakikalar alır, ışık ve malzemeler ayarlandıktan sonra ise bütün sahnenin baştan hesaplanması anlamına gelir.",
          "Ardından malzemeler, ışık ve render. Yüzeyleri, yansımaları, ışık kaynaklarını, alan derinliğini ayarlıyoruz — gerçeklik hissini yaratan da bunlardır. Hesaplamanın ardından son işlem geliyor: renk, kontrast, artefakt temizliği. Animasyonda bu aşamaların arasına kamera ve nesne hareketiyle ilgili çalışma ekleniyor ve onu da nihai render'dan önce, kaba hesaplamada onaylatıyoruz.",
        ],
      },
      {
        h2: "Çekim yerine 3D: ne zaman yerinde bir tercih",
        paragraphs: [
          "Fiziksel olarak çekilecek bir şey olmadığında 3D kazanır. Ürün hâlâ üretimde, bina inşa edilmemiş, park yalnızca proje hâlinde. Burada hiçbir fotoğraf işe yaramaz, oysa karar — onay, satış, yatırım — üretime ya da inşaata para koymadan, şimdi verilmelidir.",
          "İkinci durum, nesne sayısının çok ve nesnelerin aynı türden olmasıdır. Kurulmuş sahne bir üretim bandı gibi çalışır: etiket, renk, şişe hacmi değişir, geri kalanı yerinde kalır. Yirmi ürünlük bir seri için bu, her ürüne göre ışığın yeniden kurulduğu iki çekim gününden belirgin biçimde daha ucuz ve daha öngörülebilirdir; sonuç ise ışık ve açı bakımından kesinlikle tektiptir.",
          "Ama 3D evrensel bir çözüm değildir ve bunu açıkça söylüyoruz. Canlı yemek, hareket hâlindeki kumaş, insanlar, bir mekânın atmosferi — bunların hepsi çoğu zaman çekimle daha ucuza ve daha inandırıcı çıkar. Beyaz zemindeki tek ve basit bir nesneyi de genellikle fotoğraflamak daha kolaydır. İşiniz için fotoğraf daha mantıklıysa, siparişi küçültse bile bunu olduğu gibi söyleriz.",
        ],
      },
      {
        h2: "Teslim formatları ve süre",
        paragraphs: [
          "Sabit kareler baskıya uygun yüksek çözünürlükte ve site ile sosyal medya için hafifletilmiş sürümlerde teslim edilir — kenarlardan önemli bir şey kesilmesin diye doğrudan gereken oranlarda. Talep üzerine görseli şeffaf zeminle ayrıca kaydediyoruz; böylece nesneyi bize danışmadan herhangi bir zemine yerleştirebiliyorsunuz.",
          "Animasyon, üzerinde anlaşılan çözünürlük ve oranlarda teslim edilir: site ve sunumlar için yatay, hikâyeler ve kısa videolar için dikey. Yüksek kaliteli master dosyayı ve yayın için sıkıştırılmış sürümleri veriyoruz. Yerelleştirme ya da altyazı değişikliği planlanıyorsa bunu önceden hesaba katıyoruz — bitmiş bir videoda metni yeniden yerleştirmek, katmanı en baştan öngörmekten daha zordur.",
          "Süre; geometrinin karmaşıklığına, açı sayısına ve kaynak malzemelerin kalitesine bağlıdır. Tek bir ürün karesi birkaç günde yapılır, sahne serisi ya da animasyon belirgin biçimde daha uzun sürer. Hesaplama için ayrıca zaman ayırıyoruz: render ne kadar sürüyorsa o kadar sürer ve bu, istekle hızlanmaz. Kesin takvimi ve iş kapsamını, referansların da yer aldığı kısa bir brief'ten sonra söylüyoruz.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Yüksek çözünürlüklü kareler",
        note: "Baskıya uygun dosyalar ve site için hafifletilmiş sürümler — her mecraya göre gereken oranlarda.",
      },
      {
        ru: "Şeffaf zeminli görseller",
        note: "Alfa kanallı PNG: nesneyi bize başvurmadan herhangi bir zemine yerleştirebilmeniz için.",
      },
      {
        ru: "Animasyon ve videolar",
        note: "Yüksek kaliteli master dosya ile yatay ve dikey formatta sıkıştırılmış sürümler.",
      },
      {
        ru: "Ek açılar",
        note: "Kurulmuş sahneden yeni bakış noktaları ve düzenleme varyantları, ilk kareden daha hızlı çıkar.",
      },
      {
        ru: "Kaynak sahne",
        note: "Model, malzemeler ve ışık ayarları — anlaşmaya bağlı olarak devredilir, başlamadan önce konuşulur.",
      },
      {
        ru: "Kullanım hakları",
        note: "Tamamlanan görsellerin ve videoların hakları sözleşme uyarınca müşteriye geçer.",
      },
    ],

    steps: [
      {
        title: "Brief ve referanslar",
        text: "İşi ve malzemeleri topluyoruz: çizimler, ölçüler, numuneler, fotoğraflar, teknik özellikler. Neyi ve hangi açılardan göstereceğimiz konusunda anlaşıyoruz.",
      },
      {
        title: "Modelleme",
        text: "Nesnenin ya da sahnenin geometrisini gerçek ölçülere göre kuruyoruz. Görüntünün inandırıcı olup olmayacağını buradaki doğruluk belirler.",
      },
      {
        title: "Kaba kurgu",
        text: "Malzemesiz gri sahneyi gösteriyoruz: açı, kadraj, kompozisyon. Onay burada verilir — kamerayı sonra değiştirmek daha pahalıdır.",
      },
      {
        title: "Malzemeler ve ışık",
        text: "Yüzeyleri, yansımaları ve aydınlatmayı ayarlıyoruz — görüntünün bilgisayar işi görünmekten çıktığı aşama.",
      },
      {
        title: "Render ve son işlem",
        text: "Sahneyi hesaplıyor, artefaktları temizliyor, rengi ve kontrastı düzeltiyoruz. Animasyonda buna kamera ve nesne hareketiyle ilgili çalışma ekleniyor.",
      },
      {
        title: "Dosyaların teslimi",
        text: "Bütün mecralara uygun sürümleri hazırlıyor, malzemeleri veriyor ve tamamlanan görsellerle videoların haklarının devrini düzenliyoruz.",
      },
    ],

    faq: [
      {
        q: "3D görselleştirmenin ücreti nedir?",
        a: "Fiyat; geometrinin karmaşıklığından, açı sayısından, malzemelere ilişkin beklentilerden ve animasyon gerekip gerekmediğinden oluşur. Basit bir nesnenin tek karesiyle bitki örtüsü ve su içeren bir çevre düzenlemesi görselleştirmesi farklı hacimde işlerdir; bu yüzden tek bir rakam yayımlamıyoruz. Nesnenin tanımını ve istediğiniz sonucun referanslarını gönderin, görsellerin nereye gideceğini de belirtin: baskı, site, sosyal medya ya da yatırımcı sunumu. Yanıt olarak, sahnenin hesaplanma süresi de dahil olmak üzere iş kapsamını ve aşama aşama süreyi içeren bir teklif alırsınız.",
      },
      {
        q: "İş ne kadar sürüyor?",
        a: "Tek bir ürün karesi genellikle birkaç günde yapılır; sahne serisi ya da animasyon belirgin biçimde daha uzun sürer. Süre; modellemeden, malzeme ve ışık ayarından, hesaplamanın kendisinden ve son işlemden oluşur. Render'ı ayrıca hesaba katmak gerekir: kendi makine zamanını alır ve işin öncelikli olması bunu hızlandırmaz. Süreci gerçekten hızlandıran şey kesin kaynak malzemelerdir: ölçülü çizimler, renk kodları, yüzey numuneleri. Kesin takvimi, referansların yer aldığı brief'ten sonra söylüyoruz — ondan önce söylenecek süre rastgele bir tahmin olurdu.",
      },
      {
        q: "İşe kaç düzeltme dahil?",
        a: "Tur sayısı sözleşmede sabitlenir ve aşamalara dağıtılır. Kaba kurgudaki düzeltmeler — açı, kadraj, kompozisyon — işe dahildir ve memnuniyetle karşılanır: en ucuza tam orada yapılırlar. Nihai render'dan sonraki düzeltmeler mümkündür, ama her biri sahnenin yeniden hesaplanması demektir; bu yüzden ara aşamalara dikkatle bakmanızı rica ediyoruz. Nesnenin kendisinin değişmesi — başka bir ambalaj modeli, başka bir yerleşim planı — düzeltme değil, yeni bir iştir ve bunu başlamadan önce, hemen böyle adlandırıyoruz.",
      },
      {
        q: "Görseller üzerindeki haklar kime ait?",
        a: "Tamamlanan görsellerin ve videoların hakları sözleşme uyarınca müşteriye geçer: bunları reklamda, pazaryerlerinde, baskıda ve sunumlarda süre sınırı olmadan kullanabilirsiniz. Kaynak sahnenin — modelin, malzemelerin ve ışık ayarlarının — devri ayrıca konuşulur. Mümkündür, ancak iş kapsamını etkilediği için başlamadan önce görüşülür. Büroda kalan tek hak, sonucu portfolyoda gösterme hakkıdır; nesne gizliyse ya da henüz pazara çıkmadıysa yayımlamayı izninize kadar erteliyor veya hiç yapmıyoruz.",
      },
      {
        q: "Başlamak için bizden ne gerekiyor?",
        a: "Olabildiğince kesin kaynak veriler. Ürün için: ölçüler, ambalajın vektörel açınımı, renk kodları, malzeme numuneleri ya da ayrıntılı tarifleri, gerçek numunenin farklı yönlerden fotoğrafları. Mimari ve çevre düzenlemesi için: çizimler, planlar, kesitler, kaplama ve bitkilendirme listesi. Ayrıca referans gönderin: ışığını ve atmosferini beğendiğiniz görseller. Verilerin bir kısmı yoksa bunu hemen söyleyin — ya bir muadilini seçip sizinle birlikte onaylarız ya da netleştirme için plana zaman koyarız, ama sessizce kafamızdan uydurmayız.",
      },
      {
        q: "3D fotoğraf çekiminden daha mı iyi?",
        a: "Daha iyi ya da daha kötü değil — belirli durumlarda daha yerinde. Çekilecek bir şey olmadığında 3D vazgeçilmezdir: ürün henüz üretilmemiş, bina inşa edilmemiş, park yalnızca proje hâlinde. Aynı türden geniş ürün serilerinde de öne geçer: kurulmuş sahne, etiketi, rengi ya da hacmi yeniden çekim yapmadan değiştirmeye izin verir ve ışıkla açıyı aynı tutar. Ama canlı yemek, hareket hâlindeki kumaş, insanlar ve bir mekânın atmosferi neredeyse her zaman çekimde daha inandırıcı ve daha ucuzdur. İşiniz ikinci gruba giriyorsa bunu açıkça söyleriz.",
      },
      {
        q: "Animasyon ve motion yapıyor musunuz?",
        a: "Evet. Bu; ürünün dönmesi, nesnenin parçalarına ayrılması, bina ya da alan çevresinde uçuş, site ve sosyal medya için hareketli açılışlar ve geçişler olabilir. Çalışma sabit kareyle aynı biçimde kurulur, yalnızca hareket aşaması eklenir: kamera ve nesne yörüngeleri nihai render'dan önce, kaba hesaplamada onaylanır. Master dosyayı ve yatay ile dikey formatta sıkıştırılmış sürümleri teslim ediyoruz. Video birkaç dilde ya da farklı altyazılarla planlanıyorsa bunu önceden söyleyin — proje yapısına en başta yazılır.",
      },
      {
        q: "Ek açıları sonradan alabilir miyiz?",
        a: "Evet ve bu, 3D'nin en önemli pratik avantajlarından biridir. Sahne kurulu olduğu sürece yeni bir açı, farklı bir zemin ya da başka bir düzenleme varyantı ilk kareden belirgin biçimde daha hızlı ve daha ucuza çıkar — modeli baştan kurmak ve malzemeleri yeniden ayarlamak gerekmez. Projenin çalışma dosyalarını saklıyoruz ve pazaryeri, açık hava reklamı ya da yenilenmiş ürün serisi için yeni formatlar gerektiğinde bunlara geri dönebiliyoruz. Ek karelerin bedeli ayrıca hesaplanır ve her zaman ilk işten düşüktür — oradaki iş hacmi ilkesel olarak daha küçüktür.",
      },
    ],
  },
};

export default tr;
