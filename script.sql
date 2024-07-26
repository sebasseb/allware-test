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



