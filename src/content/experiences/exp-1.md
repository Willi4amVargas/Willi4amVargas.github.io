---
title: "PostgreSQL Synchronization System"
description: "Bidirectional (master-master) synchronization for two PostgreSQL databases with identical schemas. Ideal for databases on separate servers."
technologies: ["PYTHON", "POSTGRESQL"]
technologies_icons: ["technologies/python.png", "technologies/postgresql.svg"]
---

<div class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition duration-300 hover:shadow-primary-500/50 border border-gray-200 dark:border-gray-700">
    <div class="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">PostgreSQL Bidirectional Synchronization System</h1>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Engineered a robust master-master replication solution for PostgreSQL databases, 
            enabling seamless data synchronization between geographically distributed servers 
            while maintaining strict data consistency
        </p>
    </div>
    <div class="space-y-6">
        <div class="border-l-4 border-primary-500 pl-4">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Key Achievements</h2>
            <ul class="space-y-2 text-gray-700 dark:text-gray-400">
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500 font-bold text-lg">•</span>
                    Designed and implemented a conflict resolution protocol for simultaneous writes
                </li>
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500 font-bold text-lg">•</span>
                    Achieved 99.9% synchronization accuracy during stress testing
                </li>
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500 font-bold text-lg">•</span>
                    Reduced synchronization latency by 40% through query optimization
                </li>
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500 font-bold text-lg">•</span>
                    Implemented automatic failover mechanisms for network interruptions
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
            <div class="flex flex-wrap gap-4">
                <span class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white shadow-md">
                    <img src="/technologies/python.png" alt="Python" class="w-5 h-5 mr-2 object-contain filter dark:brightness-125">
                    Python 3.11
                </span>
                <span class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-white shadow-md">
                    <img src="/technologies/postgresql.svg" alt="PostgreSQL" class="w-5 h-5 mr-2 object-contain filter dark:brightness-125">
                    PostgreSQL 9.1
                </span>
            </div>
        </div>
    </div>
</div>
