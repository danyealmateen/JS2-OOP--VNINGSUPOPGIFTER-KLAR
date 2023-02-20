import { Members } from "./modules/members.js";

const members = new Members([]);
members.addMember({ name: "Alrik", roll: "CodeGod", id: 1 });
members.addMember({ name: "Dany", roll: "CodeNewbie", id: 2 });
members.showMembers();
