CREATE PROCEDURE ObtenerVendedorConMenosSolicitudesUltimos30Dias
AS
BEGIN
    SELECT TOP 1 
        v.nombre, 
        COUNT(s.id) AS cantidad_solicitudes
    FROM 
        Vendedor v
    LEFT JOIN 
        Solicitudes s ON v.id = s.id_vendedor 
        AND s.fecha_solicitud >= DATEADD(DAY, -30, GETDATE())
    GROUP BY 
        v.nombre
    ORDER BY 
        cantidad_solicitudes ASC;
END;