In this project, used Axios, JSON Server, useRef of React Hooks.

-This is TodoList that keep your notes.

-You can add your issue, also edit and delete.

-Used JSON Server for keep the infos in Database.

-Used Axios for call the data from database.

![todolist](https://github.com/evliyademiray/To-do-list-app/assets/139562305/88fca41f-9e71-4846-9fcb-2f5203fa8e62)



# Vite Projesi için adımlar

-npm create vite >yeni bir klasör içine react oluşturur.
-npm create vite. >terminalin bulunduğu konuma oluşturur.
-npm i > node modules indirme
-npm run dev> proje ayağa kaldırma
# Json Server
-Kendi bilgisayarımızda API oluşturmaya yarar.
-Oluşturduğumuz db.json içerisindeki verileri izler.
-Her bir dizi için endpoint oluşturur
-Bu endpointler yapılan istekleri izler.
-İstekler sonucunda olan değişim db.json dosyasına kaydedilir.

## Faydaları
-Hızlı Prototipleme: Backend oluşturulmadan önce uygulamanın temel özelliklerini oluşturmak için kullanırız.
-Kendimizi geliştirmek için yazdığımız uygulamaların backend ihtiyacını karşılar.


# Json-Server Operatörler
-Filtelemelerde kullanabileceğimiz operatörler:
-gte > greater than or equals "=>"
-lte > less than or equals "<="
-ne> not equals "!="

-değişken ismini sonuna ekleriz
-price_gte =100 :fiyatı 100den büyük veya eşit olan

## NOT:
-Projede json.server varsa projeyi ayağa kaldırmadan önce server ayağa kaldırılır
(npm run server) 
sonra proje ayağa kaldırılır.
(npm run dev)
# Axios
-HTTP istekleri için modern çözüm.
-Yerleşik değil paketini indirmek gerekiyor.
- npm i axios.

&& ve operatörü
# Altın kural

- API güncelleniyorsa arayüz de güncellenecek
- Arayüz güncelleniyorsa API da güncellenecek

-- Sadece API' yı güncellersek kullanıcı yaptığı işlemin gerçekleşip gerçekleşmediğini anlayamaz. 
Örn: alışveriş sepetinde sipariş ver butonuna tıkladık. Sadece API isteği atarsak sipariş alınır ama bizim bu işlemin başarılı olduğunu kullanıcıya bildirmemiz gerekir.

-- Sadece arayüzü güncellerseniz kullanıcı yaptığı işlemi sayfayı yenileyince kaybeder. Örn: Alışveriş sepetinde kullanıcıya alışveriş başarılı bildirimi verdik ama API'ye istek atmadık, o zaman günlerce beklese de sipariş eline geçmez.

-- Olması gereken :
Önce API isteği atılır, eğer ki API isteği başarılı olursa arayüze bu yansıtılır. Başarısız olursa hata uyarısı verilir.# To-do-list-app
