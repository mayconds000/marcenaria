<?php
class Buy {
    public function insert($data) {
        $sql = "INSERT INTO buy (fornecedor_id, data_compra, data_cadastro,
            numero, valor) VALUES (?,?,?,?,?)";
        $stm = DB::prepare($sql);
        $stm->execute(array(
            $data->fornecedor,
            $data->data,
            date("Y/m/d"),
            $data->numero,
            $data->valor
        ));

        return $stm->rowCount();
    }

    public function update($data) {
        $sql = "UPDATE buy SET fornecedor_id=?, data_compra=?, numero=?, valor=?
        WHERE id=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array(
                $data->fornecedor,
                $data->data,
                $data->numero,
                $data->valor,
                $data->id
            ));
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
        return $stm->rowCount();
    }

    public function delete($id) {
        $sql = "DELETE FROM buy WHERE id=?";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(array(
                $id
            ));
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetchAll() {
        $sql = "SELECT b.id, b.numero, b.data_compra as data, b.fornecedor_id, b.valor, s.firstName, s.lastName
        FROM buy b LEFT JOIN supplier s ON b.fornecedor_id = s.id
        ";
        $stm = DB::prepare($sql);
        try {
            $stm->execute();
            return $stm->fetchAll();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}
