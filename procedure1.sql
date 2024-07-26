CREATE PROCEDURE ObtenerTop3MarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3 
        ma.marca, 
        COUNT(s.id) AS cantidad_solicitudes
    FROM 
        Solicitudes s
    JOIN 
        MarcaAuto ma ON s.id_marca_vehiculo = ma.id
    GROUP BY 
        ma.marca
    ORDER BY 
        cantidad_solicitudes DESC;
END;
