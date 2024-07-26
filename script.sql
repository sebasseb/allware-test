CREATE TABLE Vendedor (
  id INT IDENTITY(1,1) PRIMARY KEY,
  rut NVARCHAR(50) UNIQUE,
  nombre NVARCHAR(50)
);

CREATE TABLE MarcaAuto (
  id INT IDENTITY(1,1) PRIMARY KEY,
  marca NVARCHAR(50) UNIQUE
);

CREATE TABLE ModeloAuto (
  id INT IDENTITY(1,1) PRIMARY KEY,
  modelo NVARCHAR(50),
  id_marca INT, 
  CONSTRAINT FK_Marca_Modelo FOREIGN KEY (id_marca)
    REFERENCES MarcaAuto (id)
);

CREATE TABLE Solicitudes (
  id INT IDENTITY(1,1) PRIMARY KEY,
  id_vendedor INT,
  patente NVARCHAR(10),
  id_marca_vehiculo INT,
  id_modelo_vehiculo INT,
  precio_vehiculo INT,
  fecha_solicitud DATETIME DEFAULT GETDATE(),
  CONSTRAINT FK_Solicitud_Vendedor FOREIGN KEY (id_vendedor)
    REFERENCES Vendedor (id),
  CONSTRAINT FK_Solicitud_Marca FOREIGN KEY (id_marca_vehiculo)
    REFERENCES MarcaAuto (id),
  CONSTRAINT FK_Solicitud_Modelo FOREIGN KEY (id_modelo_vehiculo)
    REFERENCES ModeloAuto (id)
);


INSERT INTO Vendedor (rut, nombre) VALUES
('12345678-9', 'Juan Pérez'),
('98765432-1', 'Ana González'),
('11223344-5', 'Pedro Martínez');


INSERT INTO MarcaAuto (marca) VALUES
('Toyota'),
('Honda'),
('Ford');


INSERT INTO ModeloAuto (modelo, id_marca) VALUES
('Corolla', 1), 
('Civic', 2), 
('Mustang', 3); 


INSERT INTO Solicitudes (id_vendedor, patente, id_marca_vehiculo, id_modelo_vehiculo, precio_vehiculo) VALUES
(1, 'ABCD123', 1, 1, 20000), 
(2, 'EFGH456', 2, 2, 25000), 
(3, 'IJKL789', 3, 3, 30000); 

INSERT INTO ModeloAuto (modelo, id_marca) VALUES
('Yaris', 1); 

INSERT INTO Solicitudes (id_vendedor, patente, id_marca_vehiculo, id_modelo_vehiculo, precio_vehiculo) VALUES
(2, 'MNOP123', 1, 4, 20000);

GO

CREATE PROCEDURE ObtenerTop3MarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3 
        MarcaAuto.marca AS Marca,
        COUNT(Solicitudes.id) AS CantidadDeSolicitudes
    FROM 
        Solicitudes
    JOIN 
        MarcaAuto ON Solicitudes.id_marca_vehiculo = MarcaAuto.id
    GROUP BY 
        MarcaAuto.marca
    ORDER BY 
        CantidadDeSolicitudes DESC;
END;
GO


CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    SELECT 
        Solicitudes.* 
    FROM 
        Solicitudes
    WHERE 
        MONTH(Solicitudes.fecha_solicitud) = MONTH(GETDATE())
        AND YEAR(Solicitudes.fecha_solicitud) = YEAR(GETDATE());
END;

GO

CREATE PROCEDURE ObtenerVendedorConMenosSolicitudesUltimos30Dias
AS
BEGIN
    SELECT TOP 1 
        Vendedor.nombre AS NombreDelVendedor,
        COUNT(Solicitudes.id) AS CantidadDeSolicitudes
    FROM 
        Vendedor
    LEFT JOIN 
        Solicitudes ON Vendedor.id = Solicitudes.id_vendedor 
        AND Solicitudes.fecha_solicitud >= DATEADD(DAY, -30, GETDATE())
    GROUP BY 
        Vendedor.nombre
    ORDER BY 
        CantidadDeSolicitudes ASC;
END;

GO

CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT 
        ModeloAuto.modelo AS Modelo,
        MarcaAuto.marca AS Marca
    FROM 
        ModeloAuto
    JOIN 
        MarcaAuto ON ModeloAuto.id_marca = MarcaAuto.id
    LEFT JOIN 
        Solicitudes ON ModeloAuto.id = Solicitudes.id_modelo_vehiculo
    WHERE 
        Solicitudes.id IS NULL;
END;


GO

CREATE PROCEDURE ObtenerTop3MesesConMasVentas
AS
BEGIN
    SELECT TOP 3 
        FORMAT(Solicitudes.fecha_solicitud, 'MMMM yyyy') AS MesAno,
        SUM(Solicitudes.precio_vehiculo) AS MontoTotalEnVentas
    FROM 
        Solicitudes
    GROUP BY 
        FORMAT(Solicitudes.fecha_solicitud, 'MMMM yyyy')
    ORDER BY 
        MontoTotalEnVentas DESC;
END;

GO

EXEC ObtenerTop3MarcasMasSolicitadas;
EXEC ObtenerSolicitudesMesActual;
EXEC ObtenerVendedorConMenosSolicitudesUltimos30Dias;
EXEC ObtenerModelosSinSolicitudes;
EXEC ObtenerTop3MesesConMasVentas;
