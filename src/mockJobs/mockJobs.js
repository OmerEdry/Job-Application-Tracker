// The companyLogo uses undocumented way to get the icons, should be switched.

export const mockJobsData = [
    {
        id: 1,
        companyName: 'Google',
        companyLogo: 'https://www.google.com/s2/favicons?domain=google.com&sz=256',
        jobTitle: 'Full Stack Developer',
        jobUrl: "https://technova.com/careers/frontend-developer",
        location: 'Tel Aviv, Israel',
        workType: 'on site',
        status: 'wishlist',
        tags: ['Rest API', 'React', 'Node.js', 'Full Stack Development', 'MongoDB'],
        createdAt: '2026-02-23T09:30:00.000z',
        updatedAt: '2026-02-23T09:30:00.000z',
        notes: 'referred by G.Yafit',
    },

    {
        id: 2,
        companyName: 'Spotify',
        companyLogo: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=256',
        jobTitle: 'Frontend Engineer Intern',
        location: '',
        workType: 'Remote',
        status: 'wishlist',
        tags: ['Remote', 'React', 'HTML5', 'Software Engineering', 'TypeScript'],
        createdAt: '2026-02-21T09:30:00.000z',
        updatedAt: '2026-02-22T10:34:00.000z',
    },

    {
        id: 3,
        companyName: 'Discord',
        companyLogo: 'https://www.google.com/s2/favicons?domain=discord.com&sz=256',
        jobTitle: 'Software Engineering Intern',
        location: 'Tel Aviv, Israel',
        workType: 'on site',
        status: 'wishlist',
        tags: ['UI/UX', 'Vue', 'PostgreSQL', 'Amazon Web Services', 'Java'],
        createdAt: '2026-02-17T09:30:00.000z',
        updatedAt: '2026-02-27T09:30:00.000z',
    },

    {
        id: 4,
        companyName: 'Youtube',
        companyLogo: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=256',
        jobTitle: 'Full Stack Developer',
        location: '',
        workType: 'Remote',
        status: 'wishlist',
        tags: ['Rest API', 'React', 'Node.js', 'Full Stack Development', 'MongoDB'],
        createdAt: '2026-02-11T09:30:00.000z',
        updatedAt: '2026-02-17T09:30:00.000z',
    },

    {
        id: 5,
        companyName: 'Amazon',
        companyLogo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=256',
        jobTitle: 'Full Stack Developer',
        location: 'Netanya, Israel',
        workType: 'on site',
        status: 'applied',
        tags: ['Redis', 'React', 'HTML5', 'Software Engineering', 'TypeScript'],
        createdAt: '2026-02-13T09:30:00.000z',
        updatedAt: '2026-02-15T09:30:00.000z',
        appliedDate: '2026-02-13T09:30:00.000z',
        notes: 'referred by G.Yafit'
    },

    {
        id: 6,
        companyName: 'Tiktok',
        companyLogo: 'https://www.google.com/s2/favicons?domain=tiktok.com&sz=256',
        jobTitle: 'Software Engineer',
        workType: 'Remote',
        status: 'applied',
        tags: ['Remote', 'Angular', 'Spring Boot', 'Full Stack Development', 'Rest API'],
        createdAt: '2026-02-01T09:30:00.000z',
        updatedAt: '2026-02-01T09:30:00.000z',
        appliedDate: '2026-02-01T09:30:00.000z',
    },

    {
        id: 7,
        companyName: 'Apple',
        companyLogo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=256',
        jobTitle: 'Full Stack Developer',
        location: 'Rehovot, Israel',
        workType: 'on site',
        status: 'interviewing',
        tags: ['Kubernetes', 'React', 'Azure', 'Microservices', 'Node.js'],
        createdAt: '2026-02-23T09:30:00.000z',
        updatedAt: '2026-02-23T09:30:00.000z',
        appliedDate: '2026-02-23T09:30:00.000z',
    },

    {
        id: 8,
        companyName: 'Apple',
        companyLogo: 'https://www.google.com/s2/favicons?domain=x.com&sz=256',
        jobTitle: 'Full Stack Developer',
        workType: 'Remote',
        status: 'interviewing',
        tags: ['Kubernetes', 'React', 'Azure', 'Microservices', 'Node.js'],
        createdAt: '2026-01-01T09:30:00.000z',
        updatedAt: '2026-02-01T09:30:00.000z',
        appliedDate: '2026-01-01T09:30:00.000z',
        answerDeadline: '2026-02-28T:23:59:59.000z',
        offerAmount: 32000,
    },






];

export const uniqueSkills = [...new Set(mockJobsData.flatMap(job => job.tags).filter(Boolean))];

export const uniqueJobs = [... new Set(mockJobsData.map(job => job.companyName).filter(Boolean))];