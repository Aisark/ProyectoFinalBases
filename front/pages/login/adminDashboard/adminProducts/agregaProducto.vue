<template>
        <div>
            CRUD Productos
            <NavBarAdmin :show="true"/>
            <AdminAgregarProducto/>
        </div>
    </template>
    
    <script>
        import NavBarAdmin from '@/components/NavBarAdmin'
        import AdminAgregarProducto from '@/components/AdminAgregarProducto'
        export default {
            components: {
                NavBarAdmin,
                AdminAgregarProducto
            },
            props: ['show']
        }
    </script>
    
    <style>
        
    </style>