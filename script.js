
                        // قائمة لتخزين الكتب
                        const books = [];
                                              
                        // دالة لإضافة كتاب إلى القائمة
                        function addBook() {
                          const bookTitle = document.getElementById('bookTitle').value;
                          const readingTime = parseInt(document.getElementById('readingTime').value);
                      
                          // التحقق من أن تم إدخال قيم صالحة
                          if (!bookTitle || isNaN(readingTime) || readingTime <= 0) {
                            alert('الرجاء إدخال معلومات صحيحة.');
                            return;
                          }
                      
                          // إضافة الكتاب إلى القائمة
                          books.push({
                            title: bookTitle,
                            time: readingTime,
                          });
                      
                          // عرض الكتب في القائمة
                          displayBooks();
                      
                          // إعادة تعيين الحقول
                          document.getElementById('bookTitle').value = '';
                          document.getElementById('readingTime').value = '';
                        }
                      
                        // دالة لعرض الكتب في القائمة
                        function displayBooks() {
                          const bookList = document.getElementById('bookList');
                          bookList.innerHTML = '';
                      
                          books.forEach((book, index) => {
                            const listItem = document.createElement('li');
                            listItem.textContent = `${book.title} - ${book.time} دقيقة`;
                      
                            // إضافة زر للبدء في القراءة
                            const readButton = document.createElement('button');
                            readButton.textContent = 'ابدأ القراءة';
                            readButton.addEventListener('click', () => startReading(index));
                      
                            listItem.appendChild(readButton);
                            bookList.appendChild(listItem);
                          });
                        }
                      
                        // دالة لبدء القراءة
                        function startReading(index) {
                          const book = books[index];
                          alert(`ابدأ في قراءة ${book.title} لمدة ${book.time} دقيقة.`);
                        }
                        function updateTimer(timeRemaining, index) {
const minutes = Math.floor(timeRemaining / 60);
const seconds = timeRemaining % 60;
const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
document.getElementById('timer').innerText = formattedTime;

if (timeRemaining <= 0) {
clearInterval(timerInterval);
startReading(index);  // تنفيذ الدالة عند انتهاء الوقت
}
}

function startReadingTimer(index) {
const book = books[index];
let timeRemaining = book.time * 60; // تحويل الدقائق إلى ثواني
updateTimer(timeRemaining, index);

const timerInterval = setInterval(() => {
timeRemaining--;

if (timeRemaining <= 0) {
clearInterval(timerInterval);
}

updateTimer(timeRemaining, index);
}, 1000);
}
