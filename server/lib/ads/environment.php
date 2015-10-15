<?php
class Environment{
    public function insert($data) {
        $sql = "insert into environment (name, `order`, date) values (?,?,?)";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($data->name, $data->idOrder, date("Y-m-d")));
            return $this->fetch(DB::lastInsertId());
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function update($data) {
        $sql = "update environment set name=? where id=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($data->name, $data->id));
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
            if($stm->rowCount()) {
                return $id;
            };
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetch($id){
        $sql = "select * from environment where `order`=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($id));
            return $stm->fetch();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetchAll($idOrder) {
        $sql = "select * from environment where `order`=?";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array($idOrder));
            if($stm->rowCount()){
              return $stm->fetchAll();
            } else {
              return null;
            }
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}
