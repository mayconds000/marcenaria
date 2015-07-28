<?php
class ProductOrder {
    public function insert($data) {
        $sql = "insert into product_order (description, qtd, value, environment)
         values (?,?,?,?)";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(
            array(
                $data->description,
                $data->qtd,
                $data->value,
                $data->environment
                ));
                return $this->fetch(DB::lastInsertId());
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    public function update($data) {
        $sql = "update product_order set description=?, qtd=?, value=?,
        environment=? where = id=?";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(array(
                $data->description,
                $data->qtd,
                $data->value,
                $data->environment,
                $data->id
            ));
            return $stm->rowCount();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    public function delete($id) {
        $sql = "delete from product_order where id=?";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(array($id));
            return $stm->rowCount();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetch($id) {
        $sql = "select * from product_order where id=?";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(array($id));
            return $stm->fetch();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetchAll($environment) {
        $sql = "select * from product_order where environment=?";
        $stm = DB::prepare($sql);
        try {
            $stm->execute(array($environment));
            return $stm->fetchAll();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

}
