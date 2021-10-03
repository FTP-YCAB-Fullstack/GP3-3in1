# GP3-3in1

#TOKO SEPATU

Toko sepatu 
https://lucid.app/lucidchart/61f22f36-9367-4978-827d-47c0c9f8de8e/edit?viewport_loc=-12%2C-7%2C1480%2C743%2C0_0&invitationId=inv_1523a7fe-1706-4fa4-8cfb-c646833689f6

Order 
    Orderid         => id order milik user
    OrderInNumber   =>
    OrderDate       => tanggal user melakukan order
    OrderQuantity   => banyaknya order user
    OrderTotalPrice => total harga yang diorder user
    User:id

/users
/users/signup            => user dapat melakukan registrasi
/users/login             => user dapat login menggunakan email dan password
/users/:id               => user memiliki id
/users/:id/order         => user dapat melakukan order
/users/:id/order/:orderId => 
/users/:id/order/:orderId/orderBarang => user dapat melakukan order barang

/admin
/admin/login    => admin dapat melakukan login menggunakan email dan password

    ## CRUD USER
    /users getAll               => user dapat melihat semua data
    /users/signup CreateUser    => user dapat membuat akun baru
    /users/:userId DeleteUser   => user dapat menghapus akun
    /users/:userId UpdateUser   => user dapat mengupdate akun

    ## CRUD ORDER
    user
    /order getAll
    /order CreateOrder
    /order/:orderId DeleteOrder
    /order/:orderId UpdateOrder

    admin
    /order getAll   => admin dapat melihat semua barang yang telah di order user

    ## CRUD orderBarang
    user
    /barang/ CreateOrderBarang
    /barang/:barangId DeleteOrderBarang

    ## CRUD BARANG
    user
    /barang getAll                  => admin dan user dapat melihat semua barang
    /barang/:barangId getDetail     => user dapat melihat detail barang

    admin
    /barang createBarang                => admin dapat menambahkan barang baru
    /barang/:barangId updateBarang      => admin dapat mengupdate stok barang
    /barang/:barangId deleteBarang      => admin dapat menghapus barang yang sudah tidak tersedia

    ## CRUD CATEGORY
    /category getAll                        => user dan admin dapat melihat semua category barang
    /category createCategory                => admin dapat membuat category barang baru
    /category/:categoryId deleteCategory    => admin dapat menghapus category barang




 
