# DApp-Voting
## Tên nhóm và thành viên
Tên nhóm: Nhóm D  
Danh sách thành viên: 
* Nguyễn Phùng Thu Hà - 31231022138
* Nguyễn Cáp Bảo Huyền - 31231026043
* Nguyễn Dương Phong - 31231021957
* Võ Ngọc Cẩm Tâm - 31231022186
* Phạm Tiến Thành - 31231025969
## Mô tả chức năng
Dự án này là một hệ thống bầu chọn các môn học chuyên ngành trên blockchain Ethereum với một hợp đồng thông minh đơn giản và giao diện front-end đẹp mắt.  
Nội dung chính:
- `contracts/Voting.sol` : hợp đồng thông minh Voting cho phép admin cấp quyền whitelist và người dùng đã được whitelist có thể bỏ phiếu cho các môn học.
- `frontend/index.html` : giao diện React đơn trang hiển thị danh sách môn học, biểu đồ và biểu mẫu bỏ phiếu.
- `scripts/deploy.js` : script triển khai hợp đồng lên mạng Hardhat.
- `test/Voting.test.js` : bộ test cơ bản kiểm tra tính năng khởi tạo ứng viên, whitelist và bỏ phiếu.
## Ảnh chụp màn hình 
* Giao diện chính hiển thị danh sách môn học.   
![Giao diện trang chủ](Screenshot%202026-05-06%20161540.png)  
* Khu vực quản trị dành cho Admin thêm địa chỉ ví vào danh sách hợp lệ.
