const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
  let Voting;
  let voting;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy();
  });

  // 1. Kiểm tra contract khởi tạo đúng số lượng ứng cử viên[cite: 1]
  it("Khoi tao dung so luong ung cu vien (3 mon hoc)", async function () {
    const count = await voting.candidatesCount();
    expect(count).to.equal(3);
  });

  // 2. Kiểm tra thông tin của từng ứng cử viên[cite: 1]
  it("Thong tin ung cu vien ban dau phai chinh xac va co voteCount = 0", async function () {
    const candidate0 = await voting.candidates(0);
    expect(candidate0.id).to.equal(0);
    expect(candidate0.name).to.equal("An toan web");
    expect(candidate0.voteCount).to.equal(0);
  });

  // 3. Kiểm tra một tài khoản có thể bỏ phiếu thành công và voteCount tăng lên 1[cite: 1]
  it("Tai khoan trong whitelist bo phieu thanh cong va tang voteCount", async function () {
    await voting.addToWhitelist(addr1.address);
    await voting.connect(addr1).vote(0);
    
    const candidate0 = await voting.candidates(0);
    expect(candidate0.voteCount).to.equal(1);
    
    const hasVoted = await voting.hasVoted(addr1.address);
    expect(hasVoted).to.be.true;
  });

  // 4. Kiểm tra từ chối bỏ phiếu cho ứng cử viên không hợp lệ[cite: 1]
  it("Tu choi bo phieu cho ung cu vien khong hop le (ID khong ton tai)", async function () {
    await voting.addToWhitelist(addr1.address);
    await expect(voting.connect(addr1).vote(99)).to.be.revertedWith("ID mon hoc khong hop le");
  });

  // 5. Kiểm tra từ chối bỏ phiếu hai lần từ cùng một tài khoản[cite: 1]
  it("Tu choi bo phieu hai lan tu cung mot tai khoan", async function () {
    await voting.addToWhitelist(addr1.address);
    await voting.connect(addr1).vote(1);
    await expect(voting.connect(addr1).vote(1)).to.be.revertedWith("Ban da bo phieu roi");
  });

  // 6. Kiểm tra event votedEvent được phát ra đúng với candidateId[cite: 1]
  it("Phat ra event Voted dung voi candidateId khi bo phieu thanh cong", async function () {
    await voting.addToWhitelist(addr1.address);
    await expect(voting.connect(addr1).vote(2))
      .to.emit(voting, "Voted")
      .withArgs(2, addr1.address);
  });
});
