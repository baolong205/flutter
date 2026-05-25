import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'settings.dart';
import 'services/profile_service.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  late Future<Map<String, dynamic>> _profileDataFuture;

  @override
  void initState() {
    super.initState();
    // Fetch data from API when screen loads
    _profileDataFuture = ProfileService.getProfileData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F5F5),
      body: FutureBuilder<Map<String, dynamic>>(
        future: _profileDataFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(
              child: CircularProgressIndicator(color: Color(0xFF00D1B2)),
            );
          } else if (snapshot.hasError) {
            return Center(
              child: Text('Error loading profile: ${snapshot.error}'),
            );
          } else if (!snapshot.hasData) {
            return const Center(child: Text('No data found.'));
          }

          final data = snapshot.data!;
          final profile = data['profile'];
          final photos = data['photos'];
          final journeys = data['journeys'];

          return SingleChildScrollView(
            padding: const EdgeInsets.only(bottom: 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildProfileHeader(profile),
                const SizedBox(height: 16),
                _buildPhotosSection(photos),
                const SizedBox(height: 16),
                _buildJourneysSection(journeys),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildProfileHeader(Map<String, dynamic> profile) {
    return SizedBox(
      height: 260,
      child: Stack(
        children: [
          // Cover Photo
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 200,
            child: Image.network(
              profile['cover'] ?? 'https://via.placeholder.com/600',
              fit: BoxFit.cover,
            ),
          ),
          // Settings Icon
          Positioned(
            top: 40,
            right: 16,
            child: GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => SettingsPage(profile: profile),
                  ),
                );
              },
              child: const Icon(Icons.settings_outlined, color: Colors.white),
            ),
          ),
          // Camera Icon on Cover
          const Positioned(
            top: 160,
            right: 16,
            child: Icon(Icons.camera_alt, color: Colors.white),
          ),
          // User Info
          Positioned(
            top: 210,
            left: 120,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  FirebaseAuth.instance.currentUser?.displayName ?? 
                  (FirebaseAuth.instance.currentUser?.email != null 
                      ? FirebaseAuth.instance.currentUser!.email!.split('@').first 
                      : profile['name']) ?? 'User',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  FirebaseAuth.instance.currentUser?.email ?? profile['email'] ?? 'No email',
                  style: const TextStyle(
                    fontSize: 14,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
          // Avatar
          Positioned(
            top: 160,
            left: 24,
            child: Stack(
              children: [
                CircleAvatar(
                  radius: 40,
                  backgroundColor: Colors.white,
                  child: CircleAvatar(
                    radius: 38,
                    backgroundImage: NetworkImage(profile['avatar'] ?? 'https://via.placeholder.com/150'),
                  ),
                ),
                Positioned(
                  bottom: 0,
                  right: 0,
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.camera_alt,
                      size: 14,
                      color: Color(0xFF00D1B2),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildPhotosSection(List<dynamic> photos) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                "My Photos",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Icon(Icons.keyboard_double_arrow_right, color: Colors.grey),
            ],
          ),
        ),
        // Photos Grid
        Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: Image.network(
                    photos[0] ?? 'https://via.placeholder.com/150',
                    height: 120,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(width: 2),
                Expanded(
                  child: Image.network(
                    photos[1] ?? 'https://via.placeholder.com/150',
                    height: 120,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(width: 2),
                Expanded(
                  child: Image.network(
                    photos[2] ?? 'https://via.placeholder.com/150',
                    height: 120,
                    fit: BoxFit.cover,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 2),
            Image.network(
              photos[3] ?? 'https://via.placeholder.com/600',
              height: 150,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildJourneysSection(List<dynamic> journeys) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                "My Journeys",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Icon(Icons.keyboard_double_arrow_right, color: Colors.grey),
            ],
          ),
        ),
        ListView.builder(
          padding: EdgeInsets.zero,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: journeys.length,
          itemBuilder: (context, index) {
            final journey = journeys[index];
            return Card(
              margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              color: Colors.white,
              elevation: 0,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                children: [
                  ClipRRect(
                    borderRadius: const BorderRadius.vertical(top: Radius.circular(12)),
                    child: Row(
                      children: [
                        Expanded(
                          child: Image.network(
                            journey['images'][0] ?? 'https://via.placeholder.com/300',
                            height: 180,
                            fit: BoxFit.cover,
                          ),
                        ),
                        const SizedBox(width: 2),
                        Expanded(
                          child: Column(
                            children: [
                              Image.network(
                                journey['images'][1] ?? 'https://via.placeholder.com/300',
                                height: 89,
                                width: double.infinity,
                                fit: BoxFit.cover,
                              ),
                              const SizedBox(height: 2),
                              Image.network(
                                journey['images'][2] ?? 'https://via.placeholder.com/300',
                                height: 89,
                                width: double.infinity,
                                fit: BoxFit.cover,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              journey['title'] ?? 'Title',
                              style: const TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const Icon(Icons.more_horiz, color: Colors.grey),
                          ],
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Icon(Icons.location_on, size: 16, color: Color(0xFF00D1B2)),
                            const SizedBox(width: 4),
                            Text(
                              journey['location'] ?? 'Location',
                              style: const TextStyle(
                                fontSize: 12,
                                color: Color(0xFF00D1B2),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              journey['date'] ?? 'Date',
                              style: const TextStyle(
                                fontSize: 12,
                                color: Colors.grey,
                              ),
                            ),
                            Row(
                              children: [
                                const Icon(Icons.favorite_border, size: 16, color: Color(0xFF00D1B2)),
                                const SizedBox(width: 4),
                                Text(
                                  "${journey['likes']} Likes",
                                  style: const TextStyle(
                                    fontSize: 12,
                                    color: Colors.grey,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ],
    );
  }
}
