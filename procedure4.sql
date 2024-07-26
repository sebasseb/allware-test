CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT 
        mo.modelo, 
        ma.marca
    FROM 
        ModeloAuto mo
    JOIN 
        MarcaAuto ma ON mo.id_marca = ma.id
    LEFT JOIN 
        Solicitudes s ON mo.id = s.id_modelo_vehiculo
    WHERE 
        s.id IS NULL;
END;