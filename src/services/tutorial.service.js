import http from "../http-common"

class TutorialDataService{

    getAll(){
        return http.get("/todos")
    }

    get(id){
        return http.get(`/todos/${id}`)
    }
    create(data){
        console.log(data)
        return http.post("/todos", data)
    }

    update(id,data){
        return http.put(`/todos/${id}`, data)
    }

    delete(id){
        return http.delete(`/todos/${id}`)
    }

    findByTitle(title){
        return http.get(`todos?title=${title}`)
    }

}

export default new TutorialDataService