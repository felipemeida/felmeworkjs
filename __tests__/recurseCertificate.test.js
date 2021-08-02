const Certificates = require("../app/resources/certificate-system/Certificates");
test('Consuming API from Resources Certificates', async () => {
    const certificates = new Certificates();
    const certificate = await certificates.getById(10371);
    expect(certificate.data.id).toBe(10371);
});