app.use(express.json()); 
app.use(express.static('public')); 

// use apiRoutes

app.use('/api', apiRoutes); 
app.use('/', htmlRoutes); 

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`); 
}); 