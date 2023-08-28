- [x] {baseurl}/city-list
    - GET
    - User
        - R
    - Vendor
        - R
    - Admin
        - CRU
- [x] {baseurl}/hotel/search
    - GET
    - User
        - R => param city dan tanggal
    - Vendor
        - R
    - Admin
        - R => tambahin alamat lengkap, bisa filter by city only
- [x] {baseurl}/hotel/{id}
    - GET
    - User
        - R => param hotel id
    - Vendor
        - R
    - Admin
        - R => tambahin status, telepon, saldo, email
        - U => update status aktif gak
- [x] {baseurl}/order/hotel
    - POST
    - User
        - C param => start_date, end_date, hotel_id, room_id, array of { kind, name, age, color}, notes"
    - Vendor
    - Admin
- [x] {baseurl}/payment/hotel/{order_id}
    - GET
    - User
        - R => param order id
    - Vendor
    - Admin
- [x] {baseurl}/order/hotel/list
    - GET
    - User
        - R => sesuai auth dia
    - Vendor
        - R => terima filter by date. data vendor dikosongi gak masalah kalau berat
    - Admin
        - R => untuk dashboard sementara fetch all data aja gpp
- [x] {baseurl}/order/hotel/report/{order_id}
    - GET, POST
    - User
        - R, janganlupa validasi auth BE user cuma bisa liat punya dia
    - Vendor
        - R, C =>  vendor bisa post `picture` dan `description`
    - Admin
        - R => untuk dashboard



