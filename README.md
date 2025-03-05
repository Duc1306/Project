# Project*Cấu trúc HTML và ý nghĩa các thẻ 
!Doctype kiểu khai báo dữ liệu 
<head> chứa tiêu đề 
<body> chứa phần giao diẹn <h1> văn bản đầu in đậm <p> văn bản thường 


git init : khởi tạo repository cho dự án 
git status xem trạng thái file thay đổi 
git add chuyển file từ working  sang vùng Staging <Sắp xếp lại những file đã cho >
git commit -m "" chuyển file từ vùng Staging sang vùng Repository < tạo 1 phiên banr mới >
git log xem lịch sử commit 
git show commit_id  < xem chi tiết commit >
git diff Xem sự thay đổi một file sau khi chỉnh sửa  < ở khu vực working>
gitk mở dashboard xem trực quan hơn
git checkout -- ten < bỏ đi thay đổi của file để trở về như ban đầu >
git reset HEAD ten chuyển file từ vùng Staging sang Working 
git reset --soft commit_id Chuyển từ trạng thái đã commit về trạng thái trc lúc commit 
git reset --mixed commit_id Repo-> Working



Một số hàm built-in

Hàm alert() 
- Nhiệm vụ in thông báo popup 
alert(message)

Hàm  confirm()
- Hiển thị thông báo lựa chọn là yes và no
yes-> true , no -> false
Hàm prompt()
- Lấy thông tin từ người dùng 
- Hai tham số truyền vào là nội dung thông báo và giá trị ban đầu
prompt(title,dèaultValue)

Hàm console
Dùng in ra tab console 
- console.log() in ra thông báo 
- consolo.warn() in ra cảnh báo 
-console.error() in ra lỗi 

Hàm setTimeout()
- Chạy 1 lânf duy nhất trong 1 khoảng thời gian 
typeof trả về kiểu 1 biến 

string.slice(start,end) cắt chuỗi 
string.replace(searchValue,NewValue);
string.trim bỏ khoảng trắng
string.charArt(index)
string.split chuỗi -> array 
tenBien.toString()
toFixed làm tròn số thập phân 
concat() để nối 2 mangr 
splice xóa hoặc chèn phan tu vao mảng . trả về mảng bị xóa splice(index, howmany , item )

Vongf lặp for in dùng trong object
Vòng lặp for ò dùng trong array string

Cách thêm 1 key mới vào một object 
tenObject.tenKey=value;  tenObject["tenKey"]=value  

forEach
every kiểm tra tất car điều kiện mảng phải thỏa mãn điều kiện gì đó 
some 1 phần tử thỏa mã 


BOM : là các đối tượng liên quan đến trình duyệt . Dùng để truy vết lịch sử  lưu cáỦLỦLc hành động trạng thái thông tin người dunggf 

windown là một đối tượng có nhưungx phương thức thuộc tính < cấp độ cao nhất> 
- innerHeight ,innerWidth lâyd chiều cao chiều rộng của tài liệu 
- windown.open(url,name,options); để mở cửa số mới 
- windown.close đóng cửa sổ 

BOM screen screen.width lây chiều cao máy tính

BOM location : xử lý vấn đề lien quan đến URL
- location.reload() load lại trang web
thuộc tính 

hash : lấy phần sau dấu # của URL 
host: lấy hostname và port của URL
href : lấy toàn bộ URL
BOM history 
history.back trơ lại trang trc
forward đi tới trang kế tiếp 

BOM navigator lấy thông tin người dùng 

document.cookie = "name=value"


fuction setCookie(cname, cvalue , exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = " expires " + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}


Lấy cookie 
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for(var i=0; i<ca.length; i){
        var c = ca[i];
        while(c.charArt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) ==0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




DOM Element : Lấy một thẻ HTML theo id var element = document.getElementById('idName');



Buôỉ 12
1 Scope <phạm vi truy cập>
2 Hoisting : sử dụng 1 biến xong sau đó mới cần khai báo biến đó . Chuyển toàn bộ khai báo biến lên đầu chương trình 
Sử dụng var nếu chưa gán biến gia trị trả về undefined
Sử dụng let hoặc const -> lỗi "a is not defined" 
Hàm trong hoisting 
Declaration : Có histing 
Expression : ko có 
Arrow : ko có 

3 Từ khóa this 
this troe về đối tượng mà nó đang thuộc vê 
this ngoài cùng sẽ trả về windown 

4 Moduels là một file javascript bình thường , file ý nghĩa đặt tên vào dòng code bên trong 
KhaiJSON sang JS const objectJS = JSON.parse(objectJSON);
JS sang JSON const objectJS = JSON.stringify(object);


Buổi 13 
1  Callbacks : là một hàm được truyền vào đối số của một hàm khác 

2 Promise dùng dể giải quyết vấn đề callback hell giải quyết nhiều hàm lồng nhau 
new Promise khởi tạo promise 

resolve một hàm callback xử lí cho hành động thành công 
reject thất bại
.then thành công chạy vào đây
.catch thất bại chạy vào đây 
.finally luôn luôn chạy vào đây 
Có 3 trạng thái 
pending khi đang chạy trạng thái này -> underfined
fulfilled đã chạy xong  -> giá trị 
Rejected bị lỗi trạng thái này -> object lỗi 

3 Fetch API

Dùng để gọi lên trên serve thông qua một API để lấy dũ liệu trên serve trả về 
API là một url để cho phép bên front-end có thể giao tiếp trực tiép với back-end 
fetch() dùng để gửi yêu cầu lên serve  thông qua api 
then() dùng phản hổi từ serve trả về
catch() ko phản hổi 

4 Async/ Await là một tính năng của JavaScript giúp chúng ta làm việc với các đồng bộ  theo cách dễ hiểu hơn 
Dc ây dựng trên promise 
Async Khai báo một hàm bất đồng bộ 
- Tự độg biến đỏi môt hàm thông thường thành một Promise 
- Từ khoá Async được đặt trước một hàm 
Await Tạm dừng việc thực hiện các hàm Async
Khi được đặt trước một Promise , nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả 
Await chỉ có thể được sử dụng bên trong các hàm Async 

5 JSON server và Postman
JSON serve là một serve để fake API và trả chuỗi JSON 


Buổi 14
1 Storage API 
- localStorage là kho lưu trữ phía người dùng 
+ setItem() thêm dữ liệu
+ getItem() lấy dữ liệu 
- session lưu trữ theo phiên 
Spread synatx
Cú phá để lặp lại các phần tử mảng hoặc đối tượng ...name 
rest parametes tham số dại diện cho những tham số không được khai báo 


NodeJS
Express một framwork để xây dựng các ứng dụng web trong nodeJS, nhiều tính năng đc xây dựng sẵn 
cài express npm install express chạy node ten.js
Cài nodemon phục vụ js giúp tự dộng khởi  tạo ưng dụng pát hiện các thay đổi tệp 
npm install -- save-dev noedmon
thêm dòng "start": "nodemon --inspect index.js vào mục script trong file package/json
Chạy npm start


Multiple Page Application là khi người dùng cập trang con trên web , thì serve xử lí và trả về toàn bộ trang web và web  đó sẽ đc load lại mới hoàn toàn
Single Page Application là khi người dùng truy cập các trang con trên web, website sẽ chỉ load lại những phần giao diện thay đổi < youtube , fb>

Template Engines : Công cụ giúp tách mãHTML thành các phần nhỏ hơn , để tái sử dụng lại nhiều trên file html 
PUG  


1 Giới thiệu dự án 

2) Mongo DB là cơ sở dữ liệu được thiết kế theo hướng đối tượng
là một CSDL của NoSQL
Database-Collection-Document

3) Mongoose là một thư viện Object Data Modeling ODM
Thư viện mô hình hóa dữ liệu đối tượng MongoDB

4) Giới thiêuj trang quản lý sản phẩm 
Admin
     Trang tổng quan
     Trang quản lý sản phẩm , danh mục sp
     phân quyênf ,tk admin,user 
     đăng nhâp, thông tin cá nhân
     cài đặt chung
Client
     Trang chủ
     danh sách sp theo đanh mục
     chi tiết sp
     giỏ hàng
     thanh toán 
     đăng nhập, đăng kí , quên mk 
     thông tin cá nhân 


5) mo hình MVC
Model-view-controller
view(xem) giao  diện người dùng
Model(Mô hình ) Dùng kết nối CSDL
Controller(điều khiển )Dùng để kết nối Model với View
VD : Truy cập trang danh sách 
B1 truy cập vào route http
B2 từ route sẽsẽ gọi đến controller tương ứng 
B3 trong controller sẽ viết câu lệnh để lấy dữ liệu từ CSDL thông qua Model
B4 Sau khi lấy đc dữ liệu thông qua model, controller sẽ truyền dữ liệu sang view
B5 view nhận và hiển thj

6) Xây dựng trang quản lí sản phẩm 
Giả sử dự án có 2 trang 
Trang chủ có route là : /
Trang sanh sách sản phẩm có route là /producta

Tạo dự án product-manamengt
Khởi tạo npm init 
khơi tạo Express npm i express
nodemon npm install -- save-dev noedmon  ,thêm dòng "start": "nodemon --inspect index.js vào mục script trong file package/json
Tạo file index.js trong thư mục gốcss
