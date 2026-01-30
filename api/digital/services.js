export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Mobile Recharge" },
    { id: 2, name: "Internet Package" }
  ]);
}
