<template>
        <div>
            CRUD Clientes
            <NavBarAdmin :show="true"/>
            <AdminCliente/>
        </div>
    </template>
    
    <script>
        import NavBarAdmin from '@/components/NavBarAdmin'
        import AdminCliente from '@/components/AdminCliente'
        export default {
            components: {
                NavBarAdmin,
                AdminCliente
            },
            props: ['show']
        }
    </script>
    
    <style>
        
    </style>