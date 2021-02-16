const AllData = () => {
	const data = [
		{id: 1, name: "Admin", email: "admin@email.com"},
		{id: 2, name: "Office", email: "office@email.com"},
		{id: 3, name: "Marketing", email: "marketing@email.com"},
		{id: 4, name: "Marketing", email: "marketing@email.com"},
		{id: 5, name: "Operational", email: "operational@email.com"},
		{id: 6, name: "Accounting", email: "accounting@email.com"},
		{id: 7, name: "Engineer", email: "engineer@email.com"},
	]
	return data
}

const DataById = (id) => {
	console.log(id)
	const rows = AllData().filter(d => d.id == id)
	return rows

}

export default {AllData, DataById}