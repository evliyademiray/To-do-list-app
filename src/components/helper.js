//tarihi alır ve geriye gün/ay döndürür
export const formatDate = (dateStr) => {
    //date metodunu kullanabilmek için elimizdeki tarih ile date oluşturma
  const date = new Date(dateStr);
  //formatlayıp geri döndürme
  return date.getDate() + "/" + (date.getMonth() + 1);
};
