<?php
class Environment{
    public function insert($data) {
        $sql = "insert into environment (name, order) values (?,?)";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($data->name, $data->order));
            return $stm->rowCount();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function update($data) {
        $sql = "update environment set name=?, order=? where id=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($data->name, $data->order, $data->id));
            return $stm->rowCount();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function delete($id) {
        $sql = "delete from environment where id=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($id));
            return $stm->rowCount();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetchAll($order) {
        $sql = "select * from environment where order=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($order));
            return $stm->fetchAll();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}
