class Members {
  constructor(list) {
    this.list = list;
  }
  addMember(memberObj) {
    this.list.push(memberObj);
  }
  showMembers() {
    let ol = document.createElement("ol");

    this.list.forEach((list) => {
      let li = document.createElement("li");
      ol.appendChild(li);
      document.body.appendChild(ol);
      li.innerText = `${list.name} ${list.roll}`;
      console.log(list.name, list.roll);
    });
  }
}
export { Members };
