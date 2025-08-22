module.exports = {

    test_person_list: {
        sql: `select id, name, introduce, price, gender
                from test.person`,
        count: `select count(*) as total
                from test.person`,
        where: `where #`,
        order: `order by #`,
        page: `limit #`
    },

    test_person_list2: {
        sql: `select id, name, introduce, price, gender
                from test.person
                where name like :name`
    }

}