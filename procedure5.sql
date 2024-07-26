CREATE PROCEDURE ObtenerTop3MesesConMasVentas
AS
BEGIN
    SELECT TOP 3 
        FORMAT(s.fecha_solicitud, 'MMMM yyyy') AS MesAno,
        SUM(s.precio_vehiculo) AS TotalVentas
    FROM 
        Solicitudes s
    GROUP BY 
        FORMAT(s.fecha_solicitud, 'MMMM yyyy')
    ORDER BY 
        TotalVentas DESC;
END;