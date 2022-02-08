from abc import ABC, abstractmethod
import gzip
import json
import csv
from zipfile import ZipFile


class ZipCompressor():
    # Nossos compressores terão fixado o local de salvamento
    # do arquivo, então vamos defini-lo nos construtores
    def __init__(self, filepath='./'):
        self.filepath = filepath

    def compress(self, file_name):
        with ZipFile(f"{file_name}.zip", 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor():
    def _init__(self, filepath='./'):
        self.filepath = filepath

    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(f"{file_name}.gz", 'wb') as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    # Nossa classe agora espera *instâncias* de compressor como um parâmetro.
    # Temos um valor padrão para suportar o código que usava as SalesReport
    # sem parâmetros -- não precisa correr pra re-escrever nada ;)
    def __init__(self, export_file, compressor=GzCompressor()):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    # Aqui temos um atributo de classe!
    FILE_EXTENSION = ''

    # Aqui usamos o atributo de classe
    # Vai fazer mais sentido nas classes herdeiras!
    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.get_export_file_name(), 'w') as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.get_export_file_name(), 'w') as file:
            writer = csv.writer(file)

            writer.writerow(self.build())


# Para testar
relatorio_de_compras = SalesReportJSON('meu_relatorio_1')
relatorio_de_vendas = SalesReportJSON('meu_relatorio_2', ZipCompressor())

relatorio_de_compras.compress()
relatorio_de_vendas.compress()
