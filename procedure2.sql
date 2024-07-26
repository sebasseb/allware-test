CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    SELECT 
        s.* 
    FROM 
        Solicitudes s
    WHERE 
        MONTH(s.fecha_solicitud) = MONTH(GETDATE())
        AND YEAR(s.fecha_solicitud) = YEAR(GETDATE());
END;