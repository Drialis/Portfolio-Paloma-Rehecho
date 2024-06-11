const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={"/"} element={<WelcomePage />} />
                <Route path={"/about-me"} element={<AboutMe />} />
                <Route path={"/custom-map"} element={<CustomMap />} />

                <Route path={"/beaches"} element={<BeachesPage />} />
                <Route path={"/beaches/:beachId"} element={<BeachDetailsPage />} />

                <Route path={"/marine-life"} element={<MarineLifePage />} />
                <Route path={"/marine-life/:specimenId"} element={<MarineLifeDetailsPage />} />

                <Route path={"/sightings"} element={<SightingsPage />} />
                <Route path={"/sightings/:sightingId"} element={<SightingDetailsPage />} />
                <Route path={"/sightings/edit/:sightingId"} element={<EditSightingPage />} />
                <Route path={"/sightings/new"} element={<NewSightingPage />} />

                <Route path={"/*"} element={<NotFoundPage />} />

            </Routes>
        </div>
    )
}