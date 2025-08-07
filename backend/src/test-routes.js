try {
    const communityRoutes = require('./routes/communityRoutes');
    console.log("✅ communityRoutes loaded:", communityRoutes);
  } catch (err) {
    console.error("❌ Failed to load communityRoutes:", err);
  }
  