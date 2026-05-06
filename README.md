# DApp-Voting
## Tên nhóm và thành viên
Tên nhóm: Nhóm D  

Danh sách thành viên: 
* Nguyễn Phùng Thu Hà - 31231022138
* Nguyễn Cáp Bảo Huyền - 31231026043
* Nguyễn Dương Phong - 31231021957
* Võ Ngọc Cẩm Tâm - 31231022186
* Phạm Tiến Thành - 31231025969
## Mô tả dự án
Dự án này là một hệ thống bầu chọn các môn học chuyên ngành trên blockchain Ethereum với một hợp đồng thông minh đơn giản và giao diện front-end đẹp mắt.  

Nội dung chính:
- `contracts/Voting.sol` : hợp đồng thông minh Voting cho phép admin cấp quyền whitelist và người dùng đã được whitelist có thể bỏ phiếu cho các môn học.
- `frontend/index.html` : giao diện React đơn trang hiển thị danh sách môn học, biểu đồ và biểu mẫu bỏ phiếu.
- `scripts/deploy.js` : script triển khai hợp đồng lên mạng Hardhat.
- `test/Voting.test.js` : bộ test cơ bản kiểm tra tính năng khởi tạo ứng viên, whitelist và bỏ phiếu.
## Cấu trúc chính
* `contracts/`: chứa hợp đồng thông minh Solidity.
* `frontend/`: chứa giao diện web tĩnh.
* `scripts/`: chứa script deploy.
* `test/`: chứa test cho Hardhat.
* `hardhat.config.js`: cấu hình Hardhat.
* `package.json`: khai báo dev dependency và scripts.
## Mô tả chức năng
Hệ thống được thiết kế với các chức năng phân quyền rõ ràng giữa Quản trị viên (Admin) và Người dùng (User)  
1. Quản lý người dùng (Admin Control)
* Cấp quyền bỏ phiếu: Admin có quyền thêm các địa chỉ ví vào danh sách hợp lệ. Chỉ những ví có trong danh sách này mới có quyền thực hiện thao tác bầu chọn.  
* Quản lý danh sách ứng viên: Admin thiết lập danh sách các môn học chuyên ngành ban đầu trong hợp đồng thông minh.
2. Chức năng bầu chọn
* Bỏ phiếu minh bạch: Mỗi người dùng đã được Whitelist có thể chọn một môn học và gửi phiếu bầu lên Blockchain.
* Ngăn chặn gian lận: Hệ thống tự động kiểm tra quyền và đảm bảo mỗi ví chỉ có thể thực hiện bầu chọn theo đúng quy tắc đã lập trình trong Smart Contract.
3. Hiển thị dữ liệu
* Thống kê thời gian thực: Kết quả bầu chọn được lấy trực tiếp từ Blockchain và hiển thị dưới dạng biểu đồ trực quan.
* Giao diện đơn trang: Sử dụng React để người dùng thao tác mượt mà, từ việc xem danh sách môn học đến việc thực hiện bỏ phiếu mà không cần tải lại trang.
4. Kiểm thử và triển khai
* Đảm bảo tính đúng đắn: Bộ test tự động kiểm tra kỹ lưỡng các điều kiện ràng buộc như: Ví chưa whitelist không được bầu, ví đã bầu không được bầu lại lần hai.
* Triển khai linh hoạt: Script tự động giúp triển khai hệ thống lên môi trường thử nghiệm Hardhat một cách nhanh chóng.
## Ảnh chụp màn hình 
* Giao diện chính hiển thị danh sách môn học.   
![Giao diện trang chủ](Screenshot%202026-05-06%20161540.png)  
* Khu vực quản trị dành cho Admin thêm địa chỉ ví vào danh sách hợp lệ.
![Giao diện trang chủ](Screenshot%202026-05-06%20162941.png)
## Hướng dẫn chạy chi tiết
### Yêu cầu hệ thống
- **Node.js** và **npm**.
- Ví **MetaMask** trên trình duyệt.
- **Python 3** (Dùng để chạy server giao diện).
### Các bước cài đặt và chạy:
1. Cài đặt dependency:
```bash
npm install
```
2. Biên dịch hợp đồng:
```bash
npx hardhat compile
```
3. Chạy mạng Hardhat cục bộ (nếu cần):
```bash
npx hardhat node
```
4. Triển khai hợp đồng lên mạng cục bộ:
```bash
npx hardhat run scripts/deploy.js --network localhost
```
5. Sao chép địa chỉ hợp đồng deploy được và dán vào ```frontend/index.html ``` tại biến ```CONTRACT_ADDRESS```.
6. Chạy giao diện người dùng
```bash
cd frontend
python3 -m http.server 8000
```
Truy cập ```http://localhost:8000``` để sử dụng ứng dụng.
## Công nghệ sử dụng
* **Solidity** và **Hardhat** cho Blockchain.
* **React** và **CSS** cho Giao diện.
* **Ethers.js** để kết nối Blockchain và Frontend.
