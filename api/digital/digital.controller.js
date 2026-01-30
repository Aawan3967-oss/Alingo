const services = require("./digital.model");

function getServices(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(services.filter(s => s.active)));
}

function orderService(req, res) {
  let body = "";

  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    const { serviceId } = JSON.parse(body || "{}");

    const service = services.find(s => s.id === serviceId);

    res.setHeader("Content-Type", "application/json");

    if (!service) {
      return res.end(JSON.stringify({ message: "Service not found" }));
    }

    res.end(JSON.stringify({
      message: `${service.title} activated successfully`
    }));
  });
}

module.exports = { getServices, orderService };
